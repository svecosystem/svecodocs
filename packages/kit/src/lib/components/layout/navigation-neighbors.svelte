<script lang="ts">
	import type { NavigationNeighbors } from "$lib/types.js";
	import { Button } from "$lib/components/ui/button/index.js";

	type Props = NavigationNeighbors;

	let { previous, next }: Props = $props();
</script>

{#if previous || next}
	<div class="mt-6 flex w-full flex-col gap-2 lg:flex-row">
		{#if previous}
			{@const isExternalLink = !previous.href.startsWith("/")}
			<Button
				variant="subtle"
				href={previous.href}
				target={isExternalLink ? "_blank" : undefined}
				class="flex h-fit w-full flex-col items-start gap-2 rounded-lg p-4 text-sm"
			>
				<div class="inline-flex items-center gap-1.5 font-medium">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="-mx-1 size-4 shrink-0 rtl:rotate-180"
						><path d="m15 18-6-6 6-6"></path></svg
					>
					<p>{previous.title}</p>
				</div>
				<p class="text-muted-foreground w-[90%] truncate font-normal">
					{previous.description}
				</p>
			</Button>
		{/if}
		{#if next}
			{@const isExternalLink = !next.href.startsWith("/")}
			<Button
				variant="subtle"
				href={next.href}
				target={isExternalLink ? "_blank" : undefined}
				class="flex h-fit w-full flex-col items-end gap-2 rounded-lg p-4 text-end text-sm"
			>
				<div class="inline-flex flex-row-reverse items-center gap-1.5 font-medium">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="-mx-1 size-4 shrink-0 rtl:rotate-180"
						><path d="m9 18 6-6-6-6"></path></svg
					>
					<p>{next.title}</p>
				</div>
				<p class="text-muted-foreground w-[90%] truncate font-normal">
					{next.description}
				</p>
			</Button>
		{/if}
	</div>
{/if}
