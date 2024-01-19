<script lang="ts">
	import { page } from "$app/stores";
	import type { SidebarNavItem } from "$lib/config";
	import { isTitleActive, slugFromPathname } from "$lib/utils/docs";

	export let navItem: SidebarNavItem;
	$: currentPath = slugFromPathname($page.url.pathname);
</script>

{#if navItem.items.length}
	<h5 class="mb-8 font-semibold text-muted-foreground lg:mb-3">{navItem.title}</h5>
	<ul class="space-y-6 border-l border-border lg:space-y-2">
		{#each navItem.items as item}
			{@const isActive = isTitleActive(currentPath, item.title)}
			<li>
				<a
					href={item.href}
					class="-ml-px block border-l border-border pl-4 {isActive
						? 'border-primary text-primary'
						: 'border-border text-muted-foreground'}">{item.title}</a
				>
			</li>
		{/each}
	</ul>
{:else}
	<a href={navItem.href} class="group mb-4 flex items-center font-semibold lg:text-sm lg:leading-6">
		{navItem.title}
	</a>
{/if}
