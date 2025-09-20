---
title: Search
description: Learn how to customize the search in your Svecodocs project.
section: Configuration
---

The search functionality provides fast, client-side search across your documentation using FlexSearch for indexing and fuzzy matching.

## How It Works

The search system consists of three main parts:

1. **Build-time indexing** - Documents are processed and indexed during the build
2. **Static API endpoint** - Search data is served from a static JSON file
3. **Client-side search** - Fast, interactive search interface

## Build Process

During the build process, the `build-search-data.js` script is used to generate the search index:

```ts
import { fileURLToPath } from "node:url";
import { writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { docs } from "../.velite/index.js";
import { defineSearchContent, cleanMarkdown } from "@svecodocs/kit";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export function buildDocsSearchIndex() {
	return defineSearchContent(
		docs.map((doc) => ({
			title: doc.title,
			href: `/docs/${doc.slug}`,
			description: doc.description,
			content: cleanMarkdown(doc.raw),
			category: doc.section,
		}))
	);
}

writeFileSync(
	resolve(__dirname, "../src/routes/api/search.json/search.json"),
	JSON.stringify(buildDocsSearchIndex()),
	{ flag: "w" }
);
```

This script:

- Imports processed documentation data from Velite
- Maps each document to a search entry with `title`, `href`, `description`, `content`, and optional `category`
- Uses `cleanMarkdown()` to remove markdown syntax from content for better search
- Writes the search index to a static JSON file

## API Endpoint

The search data is served through a static API route:

```ts
import type { RequestHandler } from "@sveltejs/kit";
import search from "./search.json" assert { type: "json" };

export const prerender = true;

export const GET: RequestHandler = () => {
	return Response.json(search);
};
```

This route is prerendered for optimal performance and serves the search index as JSON.

## Client-Side Search

The search interface is implemented as a reusable Svelte component:

```svelte
<script lang="ts">
	import { onMount } from "svelte";
	import { type SearchResult, createContentIndex, searchContentIndex } from "./search-utils.js";

	let searchState = $state<"loading" | "ready">("loading");
	let searchQuery = $state("");

	onMount(async () => {
		const content = await fetch("/api/search.json").then((res) => res.json());
		if (!content) return;
		createContentIndex(content);
		searchState = "ready";
	});
</script>
```

The component:

- Fetches search data on mount
- Creates FlexSearch indexes for fast querying
- Provides a dialog-based search interface
- Supports keyboard shortcut (Cmd/Ctrl + K)

## Search Result Structure

Each search result contains:

```ts
type SearchContent = {
	title: string;
	content: string;
	description: string;
	href: string;
	category?: string;
};

type SearchResult = SearchContent & {
	snippet?: string; // Content snippet with highlights
	highlights?: string[]; // Array of highlighted terms
	category?: string; // Document category/section
};
```

## Search Algorithm

The search uses a multi-tiered approach:

1. **Primary search**: FlexSearch indexes for title and content with different weights
    - Title matches: 10 points
    - Content matches: 5 points
2. **Fallback search**: Fuzzy matching when no exact results found
    - Fuzzy title matches: 8 points
    - Fuzzy content matches: 3 points

Results are ranked by score and limited to 10 items.

## Usage

### Basic Integration

To use the search component in your site:

```svelte
<script>
	import Search from "@svecodocs/kit/components/search/search.svelte";
</script>

<Search />
```
