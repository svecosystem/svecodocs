<script lang="ts">
	import { Switch as SwitchPrimitive, type WithoutChildrenOrChild } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		checked = $bindable(false),
		...restProps
	}: WithoutChildrenOrChild<SwitchPrimitive.RootProps> = $props();
</script>

<SwitchPrimitive.Root
	bind:ref
	bind:checked
	class={cn(
		"data-[state=checked]:bg-foreground data-[state=unchecked]:bg-muted inset-shadow-foreground/5 data-[state=checked]:inset-shadow-muted/10 inset-shadow-2xs inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:brightness-[110%]",
		className
	)}
	{...restProps}
>
	<SwitchPrimitive.Thumb
		class={cn(
			"bg-background border-background inset-shadow-muted/20 inset-ring-muted/5 inset-ring inset-shadow-sm data-[state=checked]:translate-x-5.5 pointer-events-none block size-5 rounded-full border shadow-lg ring-0 transition-transform data-[state=unchecked]:translate-x-0.5"
		)}
	/>
</SwitchPrimitive.Root>
