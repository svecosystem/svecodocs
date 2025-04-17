<script lang="ts">
	import { useToc, type TableOfContents } from "$lib/hooks/use-toc.svelte.js";
	import DesktopToc from "./desktop-toc.svelte";
	import MobileToc from "./mobile-toc.svelte";

	let { toc, type = "desktop" }: { toc: TableOfContents; type?: "mobile" | "desktop" } = $props();

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
	{#if type === "desktop"}
		<DesktopToc tree={toc} {tocState} />
	{:else}
		<MobileToc tree={toc} {tocState} />
	{/if}
{/if}
