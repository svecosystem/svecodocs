<script lang="ts">
	import "$lib/styles/markdown.pcss";
	import { page } from "$app/stores";
	import type { SvelteComponent } from "svelte";
	import type { PageData } from "./$types.js";
	import { PageHeader } from "$lib/components/layout/index.js";

	type Component = $$Generic<typeof SvelteComponent>;

	export let data: PageData;
	let tagline: string;
	$: component = data.component as unknown as Component;
	$: doc = data.metadata;
	$: if ($page.url.pathname.split("/")[2] === "components") {
		tagline = "Components";
	} else {
		tagline = "Overview";
	}
</script>

<PageHeader.Root>
	<PageHeader.Tagline>{tagline}</PageHeader.Tagline>
	<PageHeader.Heading>{doc.title}</PageHeader.Heading>
	<PageHeader.Description>{doc.description}</PageHeader.Description>
</PageHeader.Root>
<div class="markdown prose relative pt-8 dark:prose-invert" id="content">
	<svelte:component this={component} />
</div>
