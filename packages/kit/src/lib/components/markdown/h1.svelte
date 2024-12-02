<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	let { class: className, children, ...restProps }: HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h1 class={cn("mt-2 scroll-m-20 text-5xl font-medium", className)} {...restProps}>
	{@render children?.()}
</h1>
