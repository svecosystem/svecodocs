<script lang="ts">
	import * as Tabs from "$lib/components/ui/tabs/index.js";
	import type { Snippet } from "svelte";

	let { value, children }: { value: string; children?: Snippet } = $props();
</script>

<Tabs.Content
	{value}
	class="relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold"
>
	{@render children?.()}
</Tabs.Content>
