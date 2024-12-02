<script lang="ts">
	import { cn } from "$lib/utils.js";
	import ScrollArea from "$lib/components/ui/scroll-area/scroll-area.svelte";
	import type { ComponentProps } from "svelte";

	let { children, class: className, ...restProps }: ComponentProps<typeof ScrollArea> = $props();
</script>

<ScrollArea
	orientation="both"
	class={cn(
		"dark:bg-primary bg-background dark:ring-primary-hover dark:inset-shadow-muted/20 dark:inset-ring-muted/10 inset-ring-muted/20 ring-muted inset-shadow-muted/20 inset-ring inset-shadow-sm relative mb-4 mt-6 max-w-[760px] rounded-xl ring"
	)}
	viewportClasses="rounded-none"
	{...restProps}
>
	<div class={cn("p-6", className)}>
		{@render children?.()}
	</div>
</ScrollArea>
