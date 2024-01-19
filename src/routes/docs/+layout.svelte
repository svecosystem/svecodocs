<script lang="ts">
	import { SidebarNav } from "$lib/components/layout/sidebar";
	import { TableOfContents } from "$lib/components/layout/toc";
</script>

<div class="overflow-hidden">
	<div class="mx-auto max-w-8xl px-4 sm:px-6 md:px-8">
		<div
			class="fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.8125rem] z-20 hidden w-[19rem] overflow-y-auto pb-10 pl-8 pr-6 lg:block"
		>
			<nav class="relative lg:text-sm lg:leading-6">
				<div class="pointer-events-none sticky top-0 -ml-0.5">
					<!-- Search -->
				</div>
				<SidebarNav />
			</nav>
		</div>
		<div class="lg:pl-[19.5rem]">
			<main class="relative z-20 mx-auto max-w-3xl pt-10 xl:max-w-none">
				<slot />
			</main>
			<footer class="mt-16 text-sm leading-6">
				<!-- footer -->
			</footer>
			<TableOfContents />
		</div>
	</div>
</div>
