<script lang="ts">
	import PageHeader from "$lib/components/layout/page-header/page-header.svelte";
	import Toc from "$lib/components/toc/toc.svelte";
	import type { Component } from "svelte";
	import type { TOCEntry } from "$lib/types.js";
	import Metadata from "../metadata.svelte";

	let {
		component,
		title,
		description,
		toc,
	}: {
		component: Component;
		title: string;
		description?: string;
		toc: TOCEntry[];
	} = $props();

	const PageComponent = $derived(component);
</script>

<Metadata {title} {description} />
<aside class="sticky">
	<div class="sticky top-24 hidden pl-16 xl:block">
		<Toc toc={{ items: toc }} />
	</div>
</aside>
<main class="mx-auto w-full min-w-0 max-w-[760px] pb-12" id="main-content">
	<PageHeader {title} {description} />
	<PageComponent />
</main>
