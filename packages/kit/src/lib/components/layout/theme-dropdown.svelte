<script lang="ts">
	import { setMode } from "mode-watcher";
	import { buttonVariants } from "$lib/components/ui/button/index.js";
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import MoonStars from "phosphor-svelte/lib/MoonStars";

	const modes = ["light", "dark", "system"] as const;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger
		aria-label="Change theme"
		class={buttonVariants({ variant: "ghost", size: "icon", className: "[&>svg]:size-6" })}
	>
		<MoonStars class="size-6" />
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="z-[100]" align="end" preventScroll={false}>
		{#each modes as themeMode}
			<DropdownMenu.Item onSelect={() => setMode(themeMode)} class="capitalize">
				{themeMode}
			</DropdownMenu.Item>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
