<script lang="ts">
	import CaretRight from "phosphor-svelte/lib/CaretRight";
	import type { TableOfContents, TocState } from "$lib/hooks/use-toc.svelte.js";
	import MobileTocTree from "./mobile-toc-tree.svelte";
	import { Popover } from "bits-ui";
	import Button from "../ui/button/button.svelte";

	let { tree, tocState }: { tree: TableOfContents; tocState: TocState } = $props();

	let open = $state(false);
</script>

<Popover.Root bind:open>
	<Popover.Trigger>
		{#snippet child({ props })}
			<Button
				{...props}
				variant="ghost"
				class="border-border dark:data-[state=open]:bg-foreground/5 hover:dark:data-[state=open]:bg-foreground/7 dark:data-[state=open]:ring-foreground/5 hover:dark:data-[state=open]:ring-foreground/7 hover:bg-foreground/2 data-[state=open]:bg-foreground/2 hover:data-[state=open]:bg-foreground/3 data-[state=open]:ring-foreground/2 hover:data-[state=open]:ring-foreground/3 -mt-4 mb-4 inline-flex w-full items-center justify-start gap-2 rounded-lg border px-4 py-2.5 font-normal ring-0 active:scale-100 data-[state=open]:rounded-b-none data-[state=open]:border-b xl:hidden data-[state=open]:[&>svg]:rotate-90"
			>
				<CaretRight
					class="text-muted-foreground size-4 transition-transform duration-150"
					data-open={open ? "" : undefined}
					data-closed={open ? undefined : ""}
				/>
				On this page
			</Button>
		{/snippet}
	</Popover.Trigger>
	<Popover.Portal>
		<Popover.Content
			class="dark:bg-primary bg-background shadow-foreground/20 inset-shadow-xs inset-shadow-background/10 dark:inset-shadow-background/20 dark:ring-foreground/20 ring-foreground/90 inset-ring inset-ring-background/5 w-[var(--bits-popover-anchor-width)] rounded-bl-xl rounded-br-xl border-b border-l border-r py-2 shadow-sm focus-visible:outline-none dark:shadow-none"
		>
			<MobileTocTree {tree} {tocState} closePopover={() => (open = false)} />
		</Popover.Content>
	</Popover.Portal>
</Popover.Root>

<!-- <Collapsible title="On this page" class="mb-4 mt-0">
	{#snippet triggerContent()}
		On this page
	{/snippet}
	<MobileTocTree {tree} {tocState} />
</Collapsible> -->
<!--
<div class={cn("w-[220px] max-w-[220px] space-y-2 text-sm xl:hidden", className)}>
	<div class="text-muted-foreground -ml-px flex items-center gap-1.5">
		<List class="size-4 shrink-0" />
		<p class="text-muted-foreground text-sm">On this page</p>
	</div>
	<div class="relative mt-4">
		<div
			class="bg-foreground absolute -left-[0.5px] top-0 h-5 w-0.5 rounded-full"
			style="transition: top 0.25s; top:{tocState.markerTopStyle};"
		></div>
		<MobileTocTree {tree} {tocState} />
	</div>
</div> -->
