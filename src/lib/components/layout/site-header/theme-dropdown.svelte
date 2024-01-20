<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import { setMode } from "mode-watcher";
	import { MoonStars } from "phosphor-svelte";

	const modes = ["light", "dark", "system"] as const;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger aria-label="Change theme">
		<MoonStars class="size-5" />
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="z-[100]">
		{#each modes as themeMode}
			<DropdownMenu.Item on:click={() => setMode(themeMode)} class="capitalize"
				>{themeMode}</DropdownMenu.Item
			>
		{/each}
	</DropdownMenu.Content>
</DropdownMenu.Root>
