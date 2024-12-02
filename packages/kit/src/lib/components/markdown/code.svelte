<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";
	let { class: className, children, ...restProps }: HTMLAttributes<HTMLElement> = $props();
</script>

<code
	class={cn(
		"text-foreground/60 relative inline-flex h-[27px] items-center justify-center rounded-[5px] bg-blue-300 px-0.5 font-mono text-xs font-medium tracking-tighter sm:text-sm",
		className,
		"custom"
	)}
	{...restProps}
>
	{@render children?.()}
</code>
