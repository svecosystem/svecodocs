<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	let { children, class: className, ...restProps }: HTMLAttributes<HTMLHeadingElement> = $props();
</script>

<h3
	class={cn(
		"font-heading mt-8 scroll-m-20 text-xl font-medium leading-6 tracking-tight [counter-increment:step]",
		"before:inset-ring before:inset-shadow-sm before:absolute before:-ml-[44px] before:inline-flex before:size-6 before:items-center before:justify-center before:rounded-md before:text-center before:-indent-px before:font-mono before:text-xs before:font-medium before:ring before:content-[counter(step)]",
		"before:bg-background before:inset-ring-muted/20 before:ring-muted before:inset-shadow-muted/20",
		"dark:before:bg-primary dark:before:ring-primary-hover dark:before:inset-shadow-muted/20",
		className
	)}
	data-toc-ignore
	{...restProps}
>
	{@render children?.()}
</h3>

<!-- .step:before {
		@apply border-background bg-muted absolute inline-flex size-9 items-center justify-center rounded-full border-4 text-center -indent-px font-mono text-base font-medium;
		@apply ml-[-50px] mt-[-4px];
		content: counter(step);
	} -->
