<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	let {
		class: className,
		children,
		...restProps
	}: HTMLAttributes<HTMLTableRowElement> = $props();
</script>

<tr class={cn("m-0 border-t p-0 first-of-type:border-t-0", className)} {...restProps}>
	{@render children?.()}
</tr>
