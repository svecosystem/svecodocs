<script lang="ts">
	import { Select as SelectPrimitive, type WithoutChild } from "bits-ui";
	import CaretDown from "phosphor-svelte/lib/CaretDown";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		...restProps
	}: WithoutChild<SelectPrimitive.TriggerProps> = $props();
</script>

<SelectPrimitive.Trigger
	bind:ref
	class={cn(
		"bg-background dark:bg-muted ring-muted-foreground/20 inset-shadow-xs inset-shadow-muted-foreground/5 data-[placeholder]:text-muted-foreground flex h-10 w-full items-center justify-between rounded-md px-3 py-2 text-sm shadow-sm ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
		className
	)}
	{...restProps}
>
	{@render children?.()}
	<CaretDown class="size-4 opacity-50" />
</SelectPrimitive.Trigger>
