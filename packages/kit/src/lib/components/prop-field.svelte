<script lang="ts">
	import type { Snippet } from "svelte";
	import Separator from "./ui/separator/separator.svelte";

	let {
		name,
		required = false,
		type,
		defaultValue,
		description,
		children,
	}: {
		name: string;
		required?: boolean;
		type: string;
		defaultValue?: string;
		description?: string;
		children: Snippet;
	} = $props();
</script>

<div class="mt-6 flex flex-col gap-3">
	<div class="flex items-center gap-3">
		<div
			class="text-brand-link dark:text-brand-link-hover relative rounded-[5px] py-[0.1875rem] font-mono"
		>
			{name}
		</div>
		<div
			class="text-foreground/90 relative rounded-[5px] bg-gray-200/60 px-[0.375rem] py-[0.1875rem] font-mono text-[0.9em] dark:bg-gray-100/10"
		>
			{type}
		</div>
		{#if defaultValue}
			<div class="text-foreground flex items-center gap-1 font-mono">
				default: <span
					class="rounded-[5px] bg-gray-200/60 px-[0.375rem] py-[0.1875rem] font-mono text-[0.9em] dark:bg-gray-100/10"
					>{defaultValue}</span
				>
			</div>
		{/if}
		{#if required}
			<span
				class="relative rounded-[5px] bg-red-200 px-[0.375rem] py-[0.1875rem] font-mono text-[0.9em] text-red-900 dark:bg-red-500/20 dark:text-red-100"
				>required</span
			>
		{/if}
	</div>
	<div class="-mb-2">
		{#if description}
			{description}
		{:else}
			{@render children?.()}
		{/if}
	</div>
	<Separator class="mt-4" />
</div>
