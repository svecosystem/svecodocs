<script lang="ts">
	import { GitHubLogo } from "$lib/components/logos/index.js";
	import ThemeDropdown from "./theme-dropdown.svelte";
	import HeaderLogo from "./site-header-logo.svelte";
	import HeaderNav from "./site-header-nav.svelte";
</script>

<header class="sticky top-0 z-50 -mb-px border-b border-border bg-background/75 backdrop-blur">
	<div class="mx-auto flex h-16 max-w-8xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
		<HeaderLogo />
		<HeaderNav />
		<div class="flex items-center justify-end gap-1.5 lg:flex-1">
			<ThemeDropdown />
			<a
				href="https://github.com/svecosystem"
				target="_blank"
				class="ml-6 block"
				aria-label="View this project on Github"
			>
				<GitHubLogo class="size-5" />
			</a>
		</div>
	</div>
</header>
