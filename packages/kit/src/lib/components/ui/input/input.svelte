<script lang="ts" module>
	export const inputClasses =
		"bg-background dark:bg-muted placeholder:text-muted-foreground flex h-10 w-full rounded-lg px-3 py-2 text-sm file:bg-transparent file:text-sm file:font-medium ring ring-muted-foreground/20 disabled:cursor-not-allowed disabled:opacity-50 inset-shadow-xs inset-shadow-muted-foreground/5 shadow-sm";
</script>

<script lang="ts">
	import type { HTMLInputAttributes } from "svelte/elements";
	import type { WithElementRef } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		value = $bindable(),
		class: className,
		...restProps
	}: WithElementRef<HTMLInputAttributes> = $props();
</script>

<input bind:this={ref} class={cn(inputClasses, className)} bind:value {...restProps} />
