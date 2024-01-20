<script lang="ts">
	import { page } from "$app/stores";
	import { Footer } from "$lib/components/layout";
	import { Sidebar } from "$lib/components/layout/sidebar";
	import { TableOfContents } from "$lib/components/layout/toc";
	import { cn } from "$lib/utils";
</script>

<div class="min-h-[calc(100vh-4rem)]">
	<div
		class="mx-auto max-w-8xl flex-1 items-start px-4 sm:px-6 md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10 lg:px-8"
	>
		<Sidebar />
		<main
			class={cn(
				"relative pb-6 pl-4 md:pl-0 lg:gap-10 xl:grid-cols-[1fr_220px]",
				$page.error ?? "xl:grid"
			)}
		>
			<div class="mx-auto w-full min-w-0 max-w-3xl pt-8" id="content">
				<slot />
			</div>
			<TableOfContents />
		</main>
	</div>
	<Footer />
</div>
