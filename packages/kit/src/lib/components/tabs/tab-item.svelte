<script lang="ts">
	import * as Tabs from "$lib/components/ui/tabs/index.js";
	import type { Snippet } from "svelte";
	import { useTabs } from "./context.svelte.js";

	const ctx = useTabs();

	let { label, children }: { label: string; children?: Snippet } = $props();

	const unregister = ctx.registerItem(label);

	$effect(() => {
		return () => {
			unregister();
		};
	});
</script>

<Tabs.Content
	value={label}
	class="relative [&_h3.font-heading]:text-base [&_h3.font-heading]:font-semibold"
>
	{@render children?.()}
</Tabs.Content>
