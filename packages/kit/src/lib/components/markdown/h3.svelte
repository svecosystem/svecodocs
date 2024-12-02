<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	let { class: className, children, ...restProps }: HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h3 class={cn("mt-8 scroll-m-20 text-2xl font-medium tracking-tight", className)} {...restProps}>
	{@render children?.()}
</h3>
