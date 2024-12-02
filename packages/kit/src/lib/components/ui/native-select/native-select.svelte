<script lang="ts">
	import type { HTMLSelectAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";
	import CaretDown from "phosphor-svelte/lib/CaretDown";

	let {
		class: className,
		children,
		value = $bindable(),
		ref = $bindable(null),
		...restProps
	}: HTMLSelectAttributes & {
		ref?: HTMLSelectElement | null;
	} = $props();
</script>

<div class={cn("relative", className)}>
	<select
		bind:this={ref}
		bind:value
		class={cn(
			"border-accent bg-background dark:bg-muted ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring block h-10 w-full min-w-[240px] appearance-none rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
		)}
		{...restProps}
	>
		{@render children?.()}
	</select>
	<CaretDown class="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2" />
</div>
