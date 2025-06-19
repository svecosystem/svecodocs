<script lang="ts">
	import { cn } from "$lib/utils.js";
	import type { PrimitiveHeadingAttributes } from "$lib/types.js";

	let { class: className, children, ...restProps }: PrimitiveHeadingAttributes = $props();
</script>

<h1 class={cn("scroll-m-20 text-[30px] font-semibold", className)} {...restProps}>
	{@render children?.()}
</h1>
