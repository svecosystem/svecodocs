<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import type { WithElementRef } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> = $props();
</script>

<h5
	bind:this={ref}
	class={cn("mb-1 ml-8 pt-0.5 font-medium leading-none -tracking-[0.01em]", className)}
	{...restProps}
>
	{@render children?.()}
</h5>
