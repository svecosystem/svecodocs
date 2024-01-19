<script lang="ts">
	import { createTableOfContents } from "@melt-ui/svelte";
	import Tree from "./tree.svelte";

	export let selector = "#content";

	const {
		elements: { item },
		states: { headingsTree, activeHeadingIdxs },
		helpers: { isActive }
	} = createTableOfContents({
		selector,
		exclude: ["h1", "h4", "h5", "h6"],
		activeType: "all",
		scrollOffset: 80
	});
</script>

{#key $headingsTree}
	<div
		class="fixed bottom-0 right-[max(0px,calc(50%-45rem))] top-[3.8125rem] z-20 hidden w-[19.5rem] overflow-y-auto py-10 xl:block"
	>
		<div class="px-8">
			<h5 class="mb-4 text-sm font-semibold leading-6">On this page</h5>
			<nav>
				<Tree tree={$headingsTree} activeHeadingIdxs={$activeHeadingIdxs} {item} {isActive} />
			</nav>
		</div>
	</div>
{/key}
