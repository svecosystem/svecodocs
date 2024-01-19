<script lang="ts">
	import { page } from "$app/stores";
	import { navigation } from "$lib/config";
	import { isTitleActive, slugFromPathname } from "$lib/utils/docs";

	$: currentPath = slugFromPathname($page.url.pathname);
</script>

<ul>
	{#each navigation.sidebar as nav}
		<li class="mt-12 lg:mt-8">
			{#if nav.items.length}
				<h5 class="mb-8 font-semibold text-muted-foreground lg:mb-3">{nav.title}</h5>
				<ul class="space-y-6 border-l border-border lg:space-y-2">
					{#each nav.items as item}
						{@const isActive = isTitleActive(currentPath, item.title)}
						<li>
							<a
								href={item.href}
								class="-ml-px block border-l border-border pl-4 font-semibold {isActive
									? 'border-primary text-primary'
									: 'border-border text-muted-foreground'}">{item.title}</a
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
