<script lang="ts">
	import { Checkbox as CheckboxPrimitive, type WithoutChildrenOrChild } from "bits-ui";
	import Check from "phosphor-svelte/lib/Check";
	import Minus from "phosphor-svelte/lib/Minus";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		checked = $bindable(false),
		indeterminate = $bindable(false),
		class: className,
		...restProps
	}: WithoutChildrenOrChild<CheckboxPrimitive.RootProps> = $props();
</script>

<CheckboxPrimitive.Root
	bind:ref
	class={cn(
		"data-[state=checked]:bg-brand data-[state=checked]:text-foreground text-brand-foreground inset-ring-foreground/5 inset-ring inset-shadow-sm data-[state=checked]:inset-shadow-white/20 ring-brand-border peer box-content size-4 shrink-0 rounded-sm bg-transparent shadow-md ring hover:brightness-[110%] active:brightness-[118%] disabled:pointer-events-none disabled:opacity-50 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50",
		className
	)}
	bind:checked
	bind:indeterminate
	{...restProps}
>
	{#snippet children({ checked, indeterminate })}
		<div class="flex size-4 items-center justify-center text-current">
			{#if indeterminate}
				<Minus class="size-3.5" />
			{:else}
				<Check class={cn("size-3.5", !checked && "text-transparent")} />
			{/if}
		</div>
	{/snippet}
</CheckboxPrimitive.Root>
