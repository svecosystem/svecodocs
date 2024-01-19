<script lang="ts">
	import { navigation } from "$lib/config";
	import SidebarNavItem from "./sidebar-nav-item.svelte";
</script>

<ul>
	{#each navigation.sidebar as navItem}
		<li class="mt-12 lg:mt-8">
			<SidebarNavItem {navItem} />
		</li>
	{/each}
</ul>
