<script lang="ts">
	import { SvecosystemDark, SvecosystemLight } from "$lib/components/logos/index.js";
	import { MoonStars } from "phosphor-svelte";
	import { navigation } from "$lib/config";
	import ThemeDropdown from "./header/theme-dropdown.svelte";
</script>

<header
	class="sticky top-0 z-40 w-full flex-none backdrop-blur lg:z-50 lg:border-b lg:border-border"
>
	<div class="max-w-8xl mx-auto">
		<div class="mx-4 border-b border-border py-4 lg:mx-0 lg:border-0 lg:px-8">
			<div class="relative flex items-center">
				<a href="/" class="mr-3 w-[2rem] flex-none overflow-hidden md:w-auto">
					<SvecosystemLight class="block h-5 w-auto dark:hidden" />
					<SvecosystemDark class="hidden h-5 w-auto dark:block" />
					<span class="sr-only"> Current Page Here </span>
				</a>
				<div class="relative ml-auto hidden items-center lg:flex">
					<nav class="text-sm font-semibold leading-6 text-muted-foreground">
						<ul class="flex space-x-8">
							<li>
								{#each navigation.main as { href, title }}
									<a {href}>{title}</a>
								{/each}
							</li>
						</ul>
					</nav>
					<div class="ml-6 flex items-center border-l border-border pl-6">
						<ThemeDropdown>
							<MoonStars class="size-4" />
						</ThemeDropdown>
					</div>
				</div>
			</div>
		</div>
	</div>
</header>
