<script lang="ts">
	import PageHeader from "$lib/components/layout/page-header/page-header.svelte";
	import Toc from "$lib/components/toc/toc.svelte";
	import type { Component, ComponentProps } from "svelte";
	import type { Contributor, TOCEntry, NavigationNeighbors } from "$lib/types.js";
	import Metadata from "../metadata.svelte";
	import ContributorSection from "../contributors-section.svelte";
	import NavigationNeighborButtons from "./navigation-neighbors.svelte";

	let {
		component,
		componentProps = {},
		title,
		description,
		toc,
		metadata = {},
		contributors = [],
		navigationNeighbors,
	}: {
		component: Component;
		componentProps?: Record<string, unknown>;
		title: string;
		description?: string;
		toc: TOCEntry[];
		metadata?: ComponentProps<typeof Metadata>;
		contributors?: Contributor[];
		navigationNeighbors?: NavigationNeighbors;
	} = $props();

	const PageComponent = $derived(component);
	const tocItems = $derived(
		contributors.length ? [...toc, { title: "Contributors", url: "#contributors" }] : toc
	);
</script>

<Metadata {...metadata} {title} {description} />
<aside class="sticky">
	<div class="sticky top-24 hidden pl-16 xl:block">
		<Toc toc={{ items: tocItems }} />
	</div>
</aside>
<div class="mx-auto">
	<aside>
		<Toc toc={{ items: tocItems }} type="mobile" />
	</aside>
	<main
		class="mx-auto flex h-full w-full min-w-0 max-w-[640px] flex-col pb-12 2xl:max-w-[760px]"
		id="main-content"
	>
		<div class="flex-1">
			<PageHeader {title} {description} />
			<PageComponent {...componentProps} />
			<ContributorSection {contributors} />
		</div>
		<NavigationNeighborButtons {...navigationNeighbors} />
	</main>
</div>
