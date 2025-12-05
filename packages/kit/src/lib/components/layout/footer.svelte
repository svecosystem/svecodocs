<script lang="ts">
	import SocialIcons from "../social-icons.svelte";
	import ThemeDropdown from "./theme-dropdown.svelte";
	import { useSiteConfig } from "$lib/hooks/use-site-config.svelte.js";

	const siteConfig = useSiteConfig();

	const copyright = $derived.by(() => {
		const copyrightConfig = siteConfig.current?.footer?.copyright;
		return {
			year: copyrightConfig?.year || new Date().getFullYear(),
			name: copyrightConfig?.name || siteConfig.current.name,
			url: copyrightConfig?.url || siteConfig.current.url,
		};
	});
</script>

<footer class="bg-background-secondary flex h-16 items-center gap-2 border-t px-4">
	<span class="text-muted-foreground text-xs">
		© {copyright.year}
		<a href={copyright.url} target="_blank" class="underline-offset-2 hover:underline">
			{copyright.name}
		</a>
	</span>
	<div class="ml-auto flex items-center">
		<SocialIcons />
		<ThemeDropdown />
	</div>
</footer>
