<script lang="ts">
	import { ReleasesPage } from "@svecodocs/kit";

	let { data } = $props();
</script>

<ReleasesPage releases={data.releases} />
