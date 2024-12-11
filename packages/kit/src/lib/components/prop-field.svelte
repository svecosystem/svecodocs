<script lang="ts">
	import type { Snippet } from "svelte";
	import Separator from "./ui/separator/separator.svelte";
	import { cn } from "$lib/utils.js";

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
	<div class="flex flex-wrap items-center gap-1.5 md:gap-3">
		<div class="flex flex-wrap items-center gap-2 md:gap-3">
			<div class="text-brand-700 dark:text-brand-400 relative font-mono text-sm md:text-base">
				{name}
			</div>
			<div
				class="text-foreground/90 relative min-w-fit rounded-[5px] bg-gray-200/60 px-[0.375rem] py-[0.1875rem] font-mono text-[0.75em] dark:bg-gray-100/10"
			>
				<span class="sr-only">type:</span>
				{type}
			</div>
		</div>
	</div>
	<div class={cn("-mb-2 text-sm md:text-base [&>p]:text-sm md:[&>p]:text-base")}>
		{#if description}
			{description}
		{:else}
			{@render children?.()}
		{/if}
	</div>
	<div class="mt-3 flex flex-col gap-2">
		{#if defaultValue}
			<div class="text-muted-foreground flex items-center font-mono">
				<span class="text-xs">
					default<span class="text-muted-foreground">:</span>
				</span>
				<span class="text-foreground/90 ml-1 min-w-fit font-mono text-xs">
					{defaultValue}
				</span>
			</div>
		{/if}
		{#if required}
			<span
				class="relative mr-auto min-w-fit font-mono text-xs text-red-600 dark:text-red-400"
			>
				required
			</span>
		{/if}
	</div>
	<Separator class="mt-4" />
</div>
