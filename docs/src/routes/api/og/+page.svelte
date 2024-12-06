<script lang="ts">
	import OG from "$lib/components/og.svelte";
	import { page } from "$app/stores";

	const title = $derived($page.url.searchParams.get("title") ?? "Svecodocs");
	const description = $derived(
		$page.url.searchParams.get("description") ??
			"Documentation toolkit for Svecosystem projects."
	);
</script>

<OG {title} {description} />
