<script lang="ts">
	import PageHeader from "$lib/components/layout/page-header/page-header.svelte";
	import Toc from "$lib/components/toc/toc.svelte";
	import type { Component, ComponentProps } from "svelte";
	import type { TOCEntry } from "$lib/types.js";
	import Metadata from "../metadata.svelte";

	let {
		component,
		title,
		description,
		toc,
		metadata = {},
	}: {
		component: Component;
		title: string;
		description?: string;
		toc: TOCEntry[];
		metadata?: ComponentProps<typeof Metadata>;
	} = $props();

	const PageComponent = $derived(component);
</script>

<Metadata {...metadata} {title} {description} />
<aside class="sticky">
	<div class="sticky top-24 hidden pl-16 xl:block">
		<Toc toc={{ items: toc }} />
	</div>
</aside>
<div class="mx-auto">
	<aside>
		<Toc toc={{ items: toc }} type="mobile" />
	</aside>
	<main class="mx-auto w-full min-w-0 max-w-[640px] pb-12 2xl:max-w-[760px]" id="main-content">
		<PageHeader {title} {description} />
		<PageComponent />
	</main>
</div>
