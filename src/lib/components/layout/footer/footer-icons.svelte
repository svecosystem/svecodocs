<script lang="ts">
	import { GitHubLogo, XLogo } from "$lib/components/logos";
	import MobileNav from "../mobile-nav/mobile-nav.svelte";
	import { Button } from "$lib/components/ui/button";
	import { siteConfig } from "$lib/config";
</script>

<div class="flex items-center justify-end lg:flex-1">
	<Button
		href={siteConfig.links.github}
		target="_blank"
		aria-label="view this project on github"
		size="icon"
		variant="subtle"
	>
		<GitHubLogo class="size-5" />
	</Button>
	<Button
		href={siteConfig.links.x}
		target="_blank"
		aria-label="follow on X (formerly known as Twitter)"
		size="icon"
		variant="subtle"
		class="inline-flex items-center"
	>
		<XLogo class="size-4" />
	</Button>
	<MobileNav />
</div>
