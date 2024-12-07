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
		<div class="flex flex-wrap items-center gap-1.5">
			<div class="text-brand-700 dark:text-brand-400 relative font-mono text-sm md:text-base">
				{name}<span class="text-muted-foreground text-sm md:text-base">:</span>
			</div>
			<div
				class="text-foreground/90 relative min-w-fit rounded-[5px] bg-gray-200/60 px-[0.375rem] py-[0.1875rem] font-mono text-[0.75em] md:text-[0.9em] dark:bg-gray-100/10"
			>
				<span class="sr-only">type:</span>
				{type}
			</div>
		</div>

		{#if Boolean(defaultValue || required)}
			<Separator orientation="vertical" class="h-5" />
		{/if}
		{#if defaultValue}
			<div class="text-muted-foreground flex items-center font-mono">
				<span class="text-sm md:text-base">
					default<span class="text-muted-foreground">:</span>
				</span>
				<span
					class="text-foreground/90 ml-1 min-w-fit rounded-[5px] bg-gray-200/60 px-[0.375rem] py-[0.1875rem] font-mono text-[0.75em] md:text-[0.9em] dark:bg-gray-100/10"
				>
					{defaultValue}
				</span>
			</div>
			{#if required}
				<Separator orientation="vertical" class="h-5" />
			{/if}
		{/if}
		{#if required}
			<span
				class="relative mr-auto min-w-fit rounded-[5px] bg-red-100 px-[0.375rem] py-[0.1875rem] font-mono text-[0.75em] text-red-900 md:text-[0.9em] dark:bg-red-500/20 dark:text-red-200"
			>
				required
			</span>
		{/if}
	</div>
	<div class={cn("-mb-2 text-sm md:text-base [&>p]:text-sm md:[&>p]:text-base")}>
		{#if description}
			{description}
		{:else}
			{@render children?.()}
		{/if}
	</div>
	<Separator class="mt-4" />
</div>
