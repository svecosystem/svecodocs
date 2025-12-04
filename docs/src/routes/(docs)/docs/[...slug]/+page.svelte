<script lang="ts">
	import { DocPage } from "@svecodocs/kit";
	import { getNavigationNeighbors } from "$lib/navigation";
	import { page } from "$app/state";
	let { data } = $props();
</script>

<DocPage
	component={data.component}
	{...data.metadata}
	navigationNeighbors={getNavigationNeighbors(page.url.pathname)}
/>
