<script lang="ts">
	import type { PrimitiveAttributes } from "$lib/types.js";
	import { cn } from "$lib/utils.js";

	let { class: className, children, ...restProps }: PrimitiveAttributes = $props();
</script>

<p
	class={cn(
		"text-muted-foreground mt-3 text-balance text-[18px] leading-7 tracking-[-0.01em]",
		className
	)}
	{...restProps}
>
	{@render children?.()}
</p>
