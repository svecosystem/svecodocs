<script lang="ts">
	import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
	import { mode, setMode } from "mode-watcher";
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={className}>
		<slot />
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="z-[100]">
		<DropdownMenu.RadioGroup value={$mode === undefined ? "system" : $mode}>
			<DropdownMenu.RadioItem value="light" on:click={() => setMode("light")}
				>Light</DropdownMenu.RadioItem
			>
			<DropdownMenu.RadioItem value="dark" on:click={() => setMode("dark")}
				>Dark</DropdownMenu.RadioItem
			>
			<DropdownMenu.RadioItem value="system" on:click={() => setMode("system")}
				>System</DropdownMenu.RadioItem
			>
		</DropdownMenu.RadioGroup>
	</DropdownMenu.Content>
</DropdownMenu.Root>
