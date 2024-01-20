<script lang="ts">
	import * as Card from "$lib/components/ui/card";
	import { RocketLaunch, Code, ComputerTower } from "phosphor-svelte";

	export let title: string;
	export let icon: "rocket" | "code" | "pc" = "rocket";

	const iconMap = {
		rocket: RocketLaunch,
		code: Code,
		pc: ComputerTower
	} as const;
</script>

<Card.Root class="flex flex-col bg-card/60 p-6">
	<div class="mb-2">
		<svelte:component this={iconMap[icon]} class="mb-2 size-10" />
	</div>
	<Card.Title class="mb-1 text-base">
		{title}
	</Card.Title>
	<p class="text-[15px] text-foreground/60">
		<slot />
	</p>
</Card.Root>
