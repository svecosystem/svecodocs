<script lang="ts">
	import { Collapsible, type WithoutChild } from "bits-ui";
	import type { ComponentProps, Snippet } from "svelte";
	import CaretRight from "phosphor-svelte/lib/CaretRight";
	import { cn } from "$lib/utils.js";
	import Button from "./ui/button/button.svelte";

	let {
		title,
		open = $bindable(false),
		children,
		class: className,
		triggerContent,
	}: Omit<WithoutChild<ComponentProps<Collapsible.Root>>, "title"> & {
		title: string;
		triggerContent?: Snippet;
	} = $props();

	const triggerPrefix = $derived(open ? "Hide" : "Show");
	const triggerText = $derived(`${triggerPrefix} ${title}`);
</script>

<Collapsible.Root bind:open class={cn("mt-3 rounded-lg border", className)}>
	<Collapsible.Trigger>
		{#snippet child({ props })}
			<Button
				{...props}
				variant="ghost"
				class={cn(
					"border-border dark:data-[state=open]:bg-foreground/5 hover:dark:data-[state=open]:bg-foreground/7 dark:data-[state=open]:ring-foreground/5 hover:dark:data-[state=open]:ring-foreground/7 hover:bg-foreground/2 data-[state=open]:bg-foreground/2 hover:data-[state=open]:bg-foreground/3 data-[state=open]:ring-foreground/2 hover:data-[state=open]:ring-foreground/3 inline-flex w-full items-center justify-start gap-2 rounded-lg px-4 py-2.5 font-normal active:scale-100 data-[state=open]:rounded-b-none data-[state=open]:border-b data-[state=open]:[&>svg]:rotate-90"
				)}
			>
				<CaretRight
					class="text-muted-foreground size-4 transition-transform duration-150"
					data-open={open ? "" : undefined}
					data-closed={open ? undefined : ""}
				/>
				{#if triggerContent}
					{@render triggerContent?.()}
				{:else}
					{triggerText}
				{/if}
			</Button>
		{/snippet}
	</Collapsible.Trigger>
	<Collapsible.Content class={cn("px-4 pb-4 [&>p]:mt-4")}>
		{@render children?.()}
	</Collapsible.Content>
</Collapsible.Root>
