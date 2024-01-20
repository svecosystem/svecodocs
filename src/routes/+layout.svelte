<script lang="ts">
	import "$lib/styles/app.pcss";
	import TwIndicator from "$lib/components/dev/tw-indicator.svelte";
	import { SiteHeader } from "$lib/components/layout/site-header/index.js";
	import { ModeWatcher } from "mode-watcher";
	import { Metadata } from "$lib/components/index.js";
</script>

<TwIndicator />
<Metadata />
<ModeWatcher />
<SiteHeader />
<slot />
