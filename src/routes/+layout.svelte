<script lang="ts">
	import "$lib/styles/app.pcss";
	import TwIndicator from "$lib/components/dev/tw-indicator.svelte";
	import SiteHeader from "$lib/components/layout/site-header.svelte";
	import { ModeWatcher } from "mode-watcher";
</script>

<ModeWatcher />
<SiteHeader />
<slot />
<TwIndicator />
