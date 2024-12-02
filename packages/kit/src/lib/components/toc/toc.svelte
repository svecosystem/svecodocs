<script lang="ts">
	import { useToc, type TableOfContents } from "$lib/hooks/use-toc.svelte.js";
	import TocTree from "./toc-tree.svelte";
	import List from "phosphor-svelte/lib/List";

	let { toc }: { toc: TableOfContents } = $props();

	const itemIds = $derived(
		toc.items
			? toc.items
					.flatMap((item) => [item.url, item?.items?.map((item) => item.url)])
					.flat()
					.filter(Boolean)
					.map((id) => id?.split("#")[1])
			: []
	);

	const tocState = useToc(() => itemIds as string[]);
</script>

{#if toc?.items?.length}
	<div class="w-[220px] max-w-[220px] space-y-2 text-sm">
		<div class="text-muted-foreground -ml-px flex items-center gap-1.5">
			<List class="size-4 shrink-0" />
			<p class="text-muted-foreground text-sm">On this page</p>
		</div>
		<div class="relative mt-4">
			<div
				class="bg-foreground absolute -left-[0.5px] top-0 h-5 w-0.5 rounded-full"
				style="transition: top 0.25s; top:{tocState.markerTopStyle};"
			></div>
			<TocTree tree={toc} {tocState} />
		</div>
	</div>
{/if}
