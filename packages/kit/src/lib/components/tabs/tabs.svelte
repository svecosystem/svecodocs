<script lang="ts">
	import * as Tabs from "$lib/components/ui/tabs/index.js";
	import type { Snippet } from "svelte";
	import { Separator } from "$lib/components/ui/separator/index.js";

	let {
		items,
		value = items[0],
		children,
	}: { value?: string; items: string[]; children?: Snippet } = $props();
</script>

<Tabs.Root class="relative mb-12 mt-6 w-full" {value}>
	<Tabs.List class="w-full justify-start rounded-none bg-transparent p-0">
		{#each items as item (item)}
			<Tabs.Trigger
				class="text-muted-foreground data-[state=active]:border-b-brand data-[state=active]:text-foreground relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-medium shadow-none transition-none data-[state=active]:shadow-none"
				value={item}
			>
				{item}
			</Tabs.Trigger>
		{/each}
	</Tabs.List>
	<Separator class="-mt-1 mb-4 h-0.5" />
	{@render children?.()}
</Tabs.Root>
