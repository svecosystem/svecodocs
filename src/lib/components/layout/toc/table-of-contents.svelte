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

<div class="overflow-y-auto rounded-lg px-4 pt-8">
	<h5 class="mb-4 text-sm font-semibold leading-6">On this page</h5>
	<nav>
		{#key $headingsTree}
			<Tree tree={$headingsTree} activeHeadingIdxs={$activeHeadingIdxs} {item} {isActive} />
		{/key}
	</nav>
</div>
