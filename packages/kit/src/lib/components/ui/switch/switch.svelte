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
		"data-[state=checked]:bg-foreground data-[state=unchecked]:bg-muted inset-shadow-foreground/5 data-[state=checked]:inset-shadow-muted/10 inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full inset-shadow-2xs transition-colors disabled:pointer-events-none disabled:opacity-50 data-[state=checked]:brightness-[110%]",
		className
	)}
	{...restProps}
>
	<SwitchPrimitive.Thumb
		class={cn(
			"bg-background border-background inset-shadow-muted/20 inset-ring-muted/5 pointer-events-none block size-5 rounded-full border inset-ring inset-shadow-sm ring-0 shadow-lg transition-transform data-[state=checked]:translate-x-5.5 data-[state=unchecked]:translate-x-0.5"
		)}
	/>
</SwitchPrimitive.Root>
