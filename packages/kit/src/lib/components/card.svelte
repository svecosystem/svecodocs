<script lang="ts">
	import { cn } from "$lib/utils.js";
	import { getContext, type Component, type Snippet } from "svelte";

	let {
		title,
		icon,
		children,
		href,
		horizontal = false,
	}: {
		title: string;
		icon?: Component;
		children?: Snippet;
		href?: string;
		horizontal?: boolean;
	} = $props();

	const Icon = $derived(icon);
	const isGrid = getContext("is-grid");
	const isExternal = $derived(!href?.startsWith("/"));
</script>

{#if href}
	<a
		{href}
		target={isExternal ? "_blank" : undefined}
		class={cn(
			"dark:bg-primary bg-background dark:ring-primary-hover dark:inset-shadow-muted/20 dark:inset-ring-muted/10 inset-ring-muted/20 ring-muted inset-shadow-muted/20  dark:hover:ring-muted-foreground/50 hover:ring-muted-foreground group/card inset-ring inset-shadow-sm relative block max-w-[760px] rounded-xl px-6 py-5 ring transition-all",
			horizontal ? "flex items-center" : "mb-4",
			isGrid ? "mb-0 mt-0" : "mb-4 mt-6"
		)}
	>
		{#if icon}
			<div
				class={cn(
					"bg-brand text-brand-foreground inset-shadow-lg inset-ring-foreground/5 group-hover/card:bg-brand-hover inset-ring inset-shadow-sm inset-shadow-white/20 ring-brand-border inline-flex size-10 w-fit shrink-0 items-center justify-center rounded-md p-2 shadow-md ring transition-colors",
					horizontal ? "mr-6" : "mb-6"
				)}
			>
				<Icon class="size-6" />
			</div>
		{/if}
		<div class="flex flex-col gap-2">
			<div role="heading" aria-level="3" data-toc-ignore class="text-xl font-medium">
				{title}
			</div>
			<div class="text-muted-foreground">
				{@render children?.()}
			</div>
		</div>
	</a>
{:else}
	<div
		class={cn(
			"dark:bg-primary bg-background dark:ring-primary-hover dark:inset-shadow-muted/20 dark:inset-ring-muted/10 inset-ring-muted/20 ring-muted inset-shadow-muted/20 inset-ring inset-shadow-sm relative max-w-[760px] rounded-xl px-6 py-5 ring",
			horizontal ? "flex items-center" : "mb-4",
			isGrid ? "mb-0 mt-0" : "mb-4 mt-6"
		)}
	>
		{#if icon}
			<div
				class={cn(
					"bg-brand text-brand-foreground inset-shadow-lg inset-ring-foreground/5 inset-ring inset-shadow-sm inset-shadow-white/20 ring-brand-border inline-flex size-10 w-fit shrink-0 items-center justify-center rounded-md p-2 shadow-md ring",
					horizontal ? "mr-6" : "mb-6"
				)}
			>
				<Icon class="size-6" />
			</div>
		{/if}
		<div class="flex flex-col gap-2">
			<div role="heading" aria-level="3" data-toc-ignore class="text-xl font-medium">
				{title}
			</div>
			<div class="text-muted-foreground">
				{@render children?.()}
			</div>
		</div>
	</div>
{/if}
