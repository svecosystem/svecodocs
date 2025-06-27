export type ReleasesResponse = {
	releases: RawReleaseEntry[];
};

export type RawReleaseEntry = {
	id: number;
	tag: string;
	name: string;
	draft: boolean;
	prerelease: boolean;
	createdAt: string;
	publishedAt: string;
	markdown: string;
};

export type ChangeType = "major" | "minor" | "patch";

export type ChangeEntry = {
	type: "major" | "minor" | "patch";
	prefix?: string;
	scope?: string;
	description: string;
	prNumber?: number;
	prUrl?: string;
	commitHash?: string;
	commitUrl?: string;
};

export type ReleaseEntry = {
	id: number;
	tag: string;
	version: string;
	createdAt: Date;
	publishedAt: Date;
	changes: {
		major: ChangeEntry[];
		minor: ChangeEntry[];
		patch: ChangeEntry[];
	};
	rawMarkdown: string;
};

export async function getReleases(owner: string, repo: string): Promise<ReleaseEntry[]> {
	try {
		const response = await fetch(`https://ungh.cc/repos/${owner}/${repo}/releases`);
		const data = (await response.json()) as ReleasesResponse;
		return data.releases.map((entry) => transformReleaseEntry(entry, owner, repo));
	} catch (error) {
		console.error(error);
		return [];
	}
}

function transformReleaseEntry(entry: RawReleaseEntry, owner: string, repo: string): ReleaseEntry {
	const changes: ReleaseEntry["changes"] = {
		major: [],
		minor: [],
		patch: [],
	};

	// parse the markdown content
	const lines = entry.markdown.split("\n");
	let currentChangeType: ChangeType | null = null;

	for (const line of lines) {
		const trimmedLine = line.trim();

		// detect change type sections
		if (trimmedLine.includes("Major Changes")) {
			currentChangeType = "major";
			continue;
		} else if (trimmedLine.includes("Minor Changes")) {
			currentChangeType = "minor";
			continue;
		} else if (trimmedLine.includes("Patch Changes")) {
			currentChangeType = "patch";
			continue;
		}

		// parse individual changes (lines starting with -)
		if (trimmedLine.startsWith("-") && currentChangeType) {
			const changeText = trimmedLine.substring(1).trim();
			const changeEntry = parseChangeEntry(changeText, owner, repo);
			if (changeEntry) {
				changes[currentChangeType].push(changeEntry);
			}
		}
	}

	return {
		id: entry.id,
		tag: entry.tag,
		version: entry.tag.replace(/^v/, ""), // remove 'v' prefix if present
		createdAt: new Date(entry.createdAt),
		publishedAt: new Date(entry.publishedAt),
		changes,
		rawMarkdown: entry.markdown,
	};
}

function parseChangeEntry(text: string, _owner: string, _repo: string): ChangeEntry | null {
	if (!text) return null;

	const result: ChangeEntry = {
		type: "patch", // default, will be overridden by context
		description: text,
	};

	// extract PR references: ([#123](url))
	const prMatch = text.match(/\(\[#(\d+)\]\((https?:\/\/[^)]+)\)\)/);
	if (prMatch) {
		result.prNumber = parseInt(prMatch[1]);
		result.prUrl = prMatch[2];
		// remove PR reference from description
		result.description = text.replace(prMatch[0], "").trim();
	}

	// extract commit references: ([`hash`](url))
	const commitMatch = text.match(/\(\[`([^`]+)`\]\((https?:\/\/[^)]+)\)\)/);
	if (commitMatch) {
		result.commitHash = commitMatch[1];
		result.commitUrl = commitMatch[2];
		// remove commit reference from description
		result.description = text.replace(commitMatch[0], "").trim();
	}

	// parse prefix and scope: "prefix(scope): description" or "prefix: description"
	const prefixMatch = result.description.match(/^([a-zA-Z]+)(\([^)]+\))?\s*:\s*(.+)$/);
	if (prefixMatch) {
		result.prefix = prefixMatch[1];
		result.scope = prefixMatch[2]?.slice(1, -1); // remove parentheses
		result.description = prefixMatch[3];
	}

	return result;
}
