<script lang="ts">
	import SidebarTrigger from "$lib/components/ui/sidebar/sidebar-trigger.svelte";
	import Search from "$lib/components/search/search.svelte";
	import SocialIcons from "../social-icons.svelte";
	import ThemeDropdown from "./theme-dropdown.svelte";
</script>

<header
	class="bg-background-secondary sticky top-0 z-10 flex h-16 items-center gap-2 border-b px-4"
>
	<SidebarTrigger class="mr-2 md:hidden [&>svg]:size-5" />
	<Search />

	<div class="ml-auto flex items-center gap-8">
		<div class="flex items-center">
			<SocialIcons />
			<ThemeDropdown />
		</div>
	</div>
</header>
