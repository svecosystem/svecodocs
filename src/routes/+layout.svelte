<script lang="ts">
	import TwIndicator from "$lib/components/dev/tw-indicator.svelte";
	import "$lib/styles/app.pcss";
	import SiteHeader from "$lib/components/layout/site-header.svelte";
</script>

<SiteHeader />
<slot />
<TwIndicator />
