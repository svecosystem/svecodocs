<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	let {
		class: className,
		children,
		...restProps
	}: HTMLAttributes<HTMLParagraphElement> = $props();
</script>

<p class={cn("text-foreground/95 leading-8 [&:not(:first-child)]:mt-6", className)} {...restProps}>
	{@render children?.()}
</p>
