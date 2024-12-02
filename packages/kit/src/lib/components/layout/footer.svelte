<script lang="ts">
	import SocialIcons from "../social-icons.svelte";
	import ThemeDropdown from "./theme-dropdown.svelte";
</script>

<footer class="bg-background-secondary flex h-16 items-center gap-2 border-t px-4">
	<span class="text-muted-foreground text-xs">
		© 2024 <a
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
