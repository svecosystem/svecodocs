<script lang="ts">
	import type { TableOfContents, TocState } from "$lib/hooks/use-toc.svelte.js";
	import { cn } from "$lib/utils.js";
	import Tree from "./toc-tree.svelte";

	let {
		tree,
		level = 1,
		tocState,
	}: {
		tree: TableOfContents;
		level?: number;
		tocState: TocState;
	} = $props();
</script>

{#if tree?.items?.length && level < 3}
	<ul
		class={cn("m-0 list-none", {
			"pl-4": level !== 1,
			"border-border/50 border-l": level === 1,
		})}
	>
		{#each tree.items as item, index (index)}
			{@const active = tocState.isActive(item)}
			<li class={cn("mt-0")}>
				<a
					href={item.url}
					class={cn(
						"hover:text-foreground ml-5 inline-block pb-2 no-underline transition-colors",
						active ? "text-foreground" : "text-muted-foreground",
						tocState.isLastItem(item) && "pb-0"
					)}
				>
					{item.title}
				</a>
				{#if item.items?.length}
					<Tree tree={item} level={level + 1} {tocState} />
				{/if}
			</li>
		{/each}
	</ul>
{/if}
