<script lang="ts">
	import { ScrollArea as ScrollAreaPrimitive, type WithoutChild } from "bits-ui";
	import Scrollbar from "./scroll-area-scrollbar.svelte";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		orientation = "vertical",
		scrollbarXClasses = "",
		scrollbarYClasses = "",
		viewportClasses = "",
		viewportProps,
		children,
		...restProps
	}: WithoutChild<ScrollAreaPrimitive.RootProps> & {
		orientation?: "vertical" | "horizontal" | "both" | undefined;
		scrollbarXClasses?: string | undefined;
		scrollbarYClasses?: string | undefined;
		viewportClasses?: ScrollAreaPrimitive.ViewportProps["class"];
		viewportProps?: ScrollAreaPrimitive.ViewportProps;
	} = $props();
</script>

<ScrollAreaPrimitive.Root bind:ref {...restProps} class={cn("relative overflow-hidden", className)}>
	<ScrollAreaPrimitive.Viewport
		{...viewportProps}
		class={cn("h-full w-full min-w-0 rounded-[inherit]", viewportClasses)}
	>
		{@render children?.()}
	</ScrollAreaPrimitive.Viewport>
	{#if orientation === "vertical" || orientation === "both"}
		<Scrollbar orientation="vertical" class={scrollbarYClasses} />
	{/if}
	{#if orientation === "horizontal" || orientation === "both"}
		<Scrollbar orientation="horizontal" class={scrollbarXClasses} />
	{/if}
	<ScrollAreaPrimitive.Corner />
</ScrollAreaPrimitive.Root>
