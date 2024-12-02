<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import { cn } from "$lib/utils.js";
	import SidebarSimple from "phosphor-svelte/lib/SidebarSimple";
	import type { ComponentProps } from "svelte";
	import { useSidebar } from "./context.svelte.js";

	let {
		ref = $bindable(null),
		class: className,
		onclick,
		...restProps
	}: ComponentProps<typeof Button> & {
		onclick?: (e: MouseEvent) => void;
	} = $props();

	const sidebar = useSidebar();
</script>

<Button
	type="button"
	onclick={(e) => {
		onclick?.(e);
		sidebar.toggle();
	}}
	data-sidebar="trigger"
	variant="subtle"
	size="icon"
	class={cn("size-7 rounded-sm", className)}
	{...restProps}
>
	<SidebarSimple />
	<span class="sr-only">Toggle Sidebar</span>
</Button>
