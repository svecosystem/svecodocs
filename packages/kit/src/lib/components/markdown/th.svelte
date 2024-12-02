<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	let {
		class: className,
		children,
		...restProps
	}: HTMLAttributes<HTMLTableCellElement> = $props();
</script>

<th
	class={cn(
		"dark:bg-muted border bg-gray-300/20 px-4 py-2 text-left font-medium [&[align=center]]:text-center [&[align=right]]:text-right",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</th>
