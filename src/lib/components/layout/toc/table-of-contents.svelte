<script lang="ts">
	import { page } from "$app/stores";
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

{#if !$page.error}
	<div>
		<div
			class="fixed z-30 hidden h-[calc(100vh-65px)] w-[220px] shrink-0 overflow-y-auto text-sm xl:block"
		>
			<div class="overflow-y-auto rounded-lg pt-8">
				<h5 class="mb-4 text-sm font-semibold leading-6">On this page</h5>
				<nav>
					{#key $headingsTree}
						<Tree tree={$headingsTree} activeHeadingIdxs={$activeHeadingIdxs} {item} {isActive} />
					{/key}
				</nav>
			</div>
		</div>
	</div>
{/if}
