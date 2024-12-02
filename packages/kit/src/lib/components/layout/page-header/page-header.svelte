<script lang="ts">
	import Separator from "$lib/components/ui/separator/separator.svelte";
	import type { PrimitiveAttributes } from "$lib/types.js";
	import { cn } from "$lib/utils.js";
	import PageHeaderDescription from "./page-header-description.svelte";
	import PageHeaderHeading from "./page-header-heading.svelte";

	let {
		class: className,
		children,
		title,
		description = "",
		...restProps
	}: PrimitiveAttributes & {
		title: string;
		description?: string;
	} = $props();
</script>

<div class={cn("relative", className)} {...restProps}>
	{#if children}
		{@render children?.()}
	{:else}
		<PageHeaderHeading>{title}</PageHeaderHeading>
		{#if description}
			<PageHeaderDescription>{description}</PageHeaderDescription>
		{/if}
		<Separator class="mt-6" />
	{/if}
</div>
