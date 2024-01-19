<script lang="ts">
	import "$lib/styles/markdown.pcss";
	import { page } from "$app/stores";
	import type { SvelteComponent } from "svelte";
	import type { PageData } from "./$types.js";

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

<div class="mx-auto w-full min-w-0">
	<div class="markdown pt-8">
		<svelte:component this={component} />
	</div>
</div>
