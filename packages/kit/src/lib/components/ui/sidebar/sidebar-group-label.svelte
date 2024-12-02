<script lang="ts">
	import { cn } from "$lib/utils.js";
	import type { WithElementRef } from "bits-ui";
	import type { Snippet } from "svelte";
	import type { HTMLAttributes } from "svelte/elements";

	let {
		ref = $bindable(null),
		children,
		child,
		class: className,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLElement>> & {
		child?: Snippet<[{ props: Record<string, unknown> }]>;
	} = $props();

	const mergedProps = $derived({
		class: cn(
			"flex h-8 shrink-0 select-none items-center rounded-md px-2 text-xs font-medium uppercase text-gray-500/60 outline-none transition-[margin,opa] duration-200 ease-linear focus-visible:ring-2 dark:text-gray-400/70 [&>svg]:size-4 [&>svg]:shrink-0",
			"mb-0.5 group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
			className
		),
		"data-sidebar": "group-label",
		...restProps,
	});
</script>

{#if child}
	{@render child({ props: mergedProps })}
{:else}
	<div bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</div>
{/if}
