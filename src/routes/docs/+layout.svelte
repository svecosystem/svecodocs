<script lang="ts">
	import { navigation } from "$lib/config";
</script>

<div class="overflow-hidden">
	<div class="max-w-8xl mx-auto px-4 sm:px-6 md:px-8">
		<div
			class="fixed inset-0 left-[max(0px,calc(50%-45rem))] right-auto top-[3.8125rem] z-20 hidden w-[19rem] overflow-y-auto pb-10 pl-8 pr-6 lg:block"
		>
			<nav class="relative lg:text-sm lg:leading-6">
				<div class="pointer-events-none sticky top-0 -ml-0.5">
					<!-- Search -->
				</div>
				<ul>
					{#each navigation.sidebar as nav}
						<li class="mt-12 lg:mt-8">
							{#if nav.items.length}
								<h5 class="mb-8 font-semibold text-muted-foreground lg:mb-3">{nav.title}</h5>
								<ul class="space-y-6 border-l border-border lg:space-y-2">
									{#each nav.items as item}
										<li>
											<a
												href={item.href}
												class="-ml-px block border-l border-current pl-4 font-semibold"
												>{item.title}</a
											>
										</li>
									{/each}
								</ul>
							{:else}
								<a
									href={nav.href}
									class="group mb-4 flex items-center font-semibold lg:text-sm lg:leading-6"
								>
									{nav.title}
								</a>
							{/if}
						</li>
					{/each}
				</ul>
			</nav>
		</div>
		<div class="lg:pl-[19.5rem]">
			<main class="relative z-20 mx-auto max-w-3xl pt-10 xl:max-w-none">
				<slot />
			</main>
			<footer class="mt-16 text-sm leading-6">
				<!-- footer -->
			</footer>
		</div>
	</div>
</div>
