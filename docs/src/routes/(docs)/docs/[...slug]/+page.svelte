<script lang="ts">
	import { DocPage } from "@svecodocs/kit";
	import { page } from "$app/stores";
	let { data } = $props();

	const origin = $derived($page.url.origin);
	const ogImageUrl = $derived(`${origin}/images/og/${data.metadata.slug}.png`);
</script>

<svelte:head>
	<meta name="twitter:image" content={ogImageUrl} />
	<meta property="og:image" content={ogImageUrl} />
</svelte:head>
<DocPage component={data.component} {...data.metadata} />
