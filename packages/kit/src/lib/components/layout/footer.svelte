<script lang="ts">
	import SocialIcons from "../social-icons.svelte";
	import ThemeDropdown from "./theme-dropdown.svelte";

	const year = new Date().getFullYear();
</script>

<footer class="bg-background-secondary flex h-16 items-center gap-2 border-t px-4">
	<span class="text-muted-foreground text-xs">
		© {year}
		<a
			href="https://github.com/svecosystem"
			target="_blank"
			class="underline-offset-2 hover:underline">Svecosystem</a
		>
	</span>
	<div class="ml-auto flex items-center">
		<SocialIcons />
		<ThemeDropdown />
	</div>
</footer>
