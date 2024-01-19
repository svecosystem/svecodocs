<script lang="ts">
	import { page } from "$app/stores";
	import { SidebarNav } from "$lib/components/layout/sidebar";
	import { TableOfContents } from "$lib/components/layout/toc";
	import { cn } from "$lib/utils";
</script>

<div class="min-h-[calc(100vh-4rem)]">
	<div
		class="mx-auto max-w-8xl flex-1 items-start px-4 sm:px-6 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10"
	>
		<div
			class="fixed z-30 hidden h-[calc(100vh-4rem)] w-full shrink-0 overflow-y-auto md:sticky md:block"
		>
			<div class="h-full pr-4">
				<nav class="relative lg:text-sm lg:leading-6">
					<div class="pointer-events-none sticky top-0 -ml-0.5">
						<!-- Search -->
					</div>
					<SidebarNav />
				</nav>
			</div>
		</div>
		<main
			class={cn(
				"relative pb-6 pl-4 pr-4 md:pl-0 lg:gap-10 xl:grid-cols-[1fr_220px]",
				$page.error ?? "xl:grid"
			)}
		>
			<div class="mx-auto w-full min-w-0 max-w-3xl pt-8" id="content">
				<slot />
			</div>

			{#if !$page.error}
				<div class="hidden text-sm xl:block">
					<div class="sticky top-16 h-[calc(100vh-4rem)] overflow-hidden">
						<TableOfContents />
					</div>
				</div>
			{/if}
		</main>
		<footer class="mt-16 text-sm leading-6"></footer>
	</div>
</div>
