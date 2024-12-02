<script lang="ts">
	import { Separator } from "$lib/components/ui/separator/index.js";
	import { cn } from "$lib/utils.js";
	import type { ComponentProps } from "svelte";

	let {
		ref = $bindable(null),
		class: className,
		...restProps
	}: ComponentProps<typeof Separator> = $props();
</script>

<Separator
	bind:ref
	data-sidebar="separator"
	class={cn("bg-muted/30 mx-4 w-4/5 self-center", className)}
	{...restProps}
/>
