<script lang="ts">
	import type { ReleaseEntry } from "../releases.js";
	import CheckCircle from "phosphor-svelte/lib/CheckCircle";
	import Sparkle from "phosphor-svelte/lib/Sparkle";
	import Bug from "phosphor-svelte/lib/Bug";
	import Warning from "phosphor-svelte/lib/Warning";
	import Wrench from "phosphor-svelte/lib/Wrench";
	import Lightning from "phosphor-svelte/lib/Lightning";
	import GitBranch from "phosphor-svelte/lib/GitBranch";
	import GitCommit from "phosphor-svelte/lib/GitCommit";

	import type { Component } from "svelte";
	import PageHeader from "./layout/page-header/page-header.svelte";

	interface Props {
		releases: ReleaseEntry[];
		title?: string;
		description?: string;
	}

	let {
		releases,
		title = "Changelog",
		description = "Track all the latest updates, improvements, and fixes to the project",
	}: Props = $props();

	const myRelease = {
		id: 9999,
		tag: "@svecodocs/kit@0.3.1",
		version: "@svecodocs/kit@0.3.1",
		createdAt: new Date("2025-06-19T17:02:35.000Z"),
		publishedAt: new Date("2025-06-19T17:02:37.000Z"),
		changes: [
			{
				description: "adjust heading, p, and callout styles",
				prNumber: 9999,
				prUrl: "https://github.com/svecosystem/svecodocs/pull/9999",
				prefix: "feat",
				scope: "docs",
			},
		],
		rawMarkdown:
			"### Minor Changes\n\n-   style: adjust heading, p, and callout styles ([#48](https://github.com/svecosystem/svecodocs/pull/48))\n",
	};

	const prefixConfig = {
		feat: {
			color: "text-green-600 dark:text-green-400",
			bg: "bg-green-50 dark:bg-green-950/30",
			icon: Sparkle,
		},
		feature: {
			color: "text-green-600 dark:text-green-400",
			bg: "bg-green-50 dark:bg-green-950/30",
			icon: Sparkle,
		},
		fix: {
			color: "text-blue-600 dark:text-blue-400",
			bg: "bg-blue-50 dark:bg-blue-950/30",
			icon: Bug,
		},
		breaking: {
			color: "text-red-600 dark:text-red-400",
			bg: "bg-red-50 dark:bg-red-950/30",
			icon: Warning,
		},
		chore: { color: "text-muted-foreground", bg: "bg-muted", icon: Wrench },
		docs: {
			color: "text-purple-600 dark:text-purple-400",
			bg: "bg-purple-50 dark:bg-purple-950/30",
			icon: CheckCircle,
		},
		style: {
			color: "text-pink-600 dark:text-pink-400",
			bg: "bg-pink-50 dark:bg-pink-950/30",
			icon: Sparkle,
		},
		refactor: {
			color: "text-orange-600 dark:text-orange-400",
			bg: "bg-orange-50 dark:bg-orange-950/30",
			icon: Wrench,
		},
		test: {
			color: "text-yellow-600 dark:text-yellow-400",
			bg: "bg-yellow-50 dark:bg-yellow-950/30",
			icon: CheckCircle,
		},
		perf: {
			color: "text-indigo-600 dark:text-indigo-400",
			bg: "bg-indigo-50 dark:bg-indigo-950/30",
			icon: Lightning,
		},
		performance: {
			color: "text-indigo-600 dark:text-indigo-400",
			bg: "bg-indigo-50 dark:bg-indigo-950/30",
			icon: Lightning,
		},
		bump: {
			color: "text-cyan-600 dark:text-cyan-400",
			bg: "bg-cyan-50 dark:bg-cyan-950/30",
			icon: Wrench,
		},
	};

	function getPrefixConfig(prefix?: string): { color: string; bg: string; icon: Component } {
		if (!prefix) return { color: "text-muted-foreground", bg: "bg-muted", icon: CheckCircle };
		const prefixLower = prefix.toLowerCase();
		return (
			prefixConfig[prefixLower as keyof typeof prefixConfig] || {
				color: "text-muted-foreground",
				bg: "bg-muted",
				icon: CheckCircle,
			}
		);
	}

	function formatDate(date: Date): string {
		return date.toLocaleDateString("en-US", {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	}
</script>

<main class="mx-auto w-full min-w-0 max-w-[640px] pb-12 2xl:max-w-[760px]" id="main-content">
	<PageHeader {title} {description} />

	<div class="mt-8 flex flex-col gap-8">
		{#each [myRelease, ...releases] as release (release.id)}
			<div class="flex flex-col gap-4">
				<div class="flex items-center justify-between border-b">
					<h2 class="font-mono font-semibold">{release.version}</h2>
					<time
						class="text-muted-foreground text-xs"
						datetime={release.publishedAt.toISOString()}
					>
						{formatDate(release.publishedAt)}
					</time>
				</div>

				<div class="flex flex-col gap-6">
					{#each release.changes as change, index (index)}
						{@const prefix = change.prefix ?? "misc"}
						{@const prefixConfig = getPrefixConfig(prefix)}
						<div class="space-y-2">
							<div class="flex flex-wrap items-center gap-2">
								<div
									class="{prefixConfig.bg} flex items-center gap-1 rounded px-2 py-1 text-xs"
								>
									<span class="font-medium {prefixConfig.color}">
										{prefix}{#if change.scope}({change.scope}){/if}
									</span>
								</div>
								<p class="text-sm">{change.description}</p>
								{#if change.prNumber || change.commitHash}
									<div class="ml-auto flex items-center gap-2">
										{#if change.prNumber && change.prUrl}
											<a
												href={change.prUrl}
												target="_blank"
												rel="noopener noreferrer"
												class="bg-muted text-muted-foreground hover:text-foreground text-xxs inline-flex items-center gap-1 rounded px-1 py-0.5"
											>
												<GitBranch class="size-3" />
												#{change.prNumber}
											</a>
										{/if}

										{#if change.commitHash && change.commitUrl}
											<a
												href={change.commitUrl}
												target="_blank"
												rel="noopener noreferrer"
												class="bg-muted text-muted-foreground hover:text-foreground text-xxs inline-flex items-center gap-1 rounded px-1 py-0.5"
											>
												<GitCommit class="size-3" />
												{change.commitHash.slice(0, 7)}
											</a>
										{/if}
									</div>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
</main>
