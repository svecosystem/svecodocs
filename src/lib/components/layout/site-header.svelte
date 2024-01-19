<script lang="ts">
	import { GitHubLogo } from "$lib/components/logos/index.js";
	import ThemeDropdown from "./header/theme-dropdown.svelte";
	import HeaderLogo from "./header/header-logo.svelte";
	import HeaderNav from "./header/header-nav.svelte";
</script>

<header
	class="sticky top-0 z-40 w-full flex-none backdrop-blur lg:z-50 lg:border-b lg:border-border"
>
	<div class="max-w-8xl mx-auto">
		<div class="mx-4 border-b border-border py-4 lg:mx-0 lg:border-0 lg:px-8">
			<div class="relative flex items-center">
				<HeaderLogo />
				<div class="relative ml-auto hidden items-center lg:flex">
					<HeaderNav />
					<div class="ml-6 flex items-center border-l border-border pl-6">
						<ThemeDropdown />
						<a href="https://github.com/svecosystem" target="_blank" class="ml-6 block">
							<GitHubLogo class="size-5" />
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
