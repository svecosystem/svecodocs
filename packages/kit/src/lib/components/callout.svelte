<script lang="ts">
	import * as Alert from "$lib/components/ui/alert/index.js";
	import { cn } from "$lib/utils.js";
	import Info from "phosphor-svelte/lib/Info";
	import RocketLaunch from "phosphor-svelte/lib/RocketLaunch";
	import Warning from "phosphor-svelte/lib/Warning";
	import WarningOctagon from "phosphor-svelte/lib/WarningOctagon";
	import CheckCircle from "phosphor-svelte/lib/CheckCircle";
	import type { Component, Snippet } from "svelte";

	let {
		type = "note",
		title = type
			.split("")
			.map((c, i) => (i === 0 ? c.toUpperCase() : c))
			.join(""),
		icon,
		children,
		class: className,
	}: {
		type?: "note" | "warning" | "danger" | "tip" | "success";
		title?: string;
		children?: Snippet;
		icon?: Component;
		class?: string;
	} = $props();

	const iconMap: Record<typeof type, Component> = {
		note: Info,
		tip: RocketLaunch,
		warning: Warning,
		danger: WarningOctagon,
		success: CheckCircle,
	} as const;
</script>

<Alert.Root class={cn("mt-4", className)} variant={type}>
	{@const Icon = icon ?? iconMap[type]}
	<Icon class="size-6" weight="bold" />

	{#if title}
		<Alert.Title class="mt-px text-lg">
			{title}
		</Alert.Title>
	{/if}

	<Alert.Description
		class="leading-relaxed data-[title]:mt-2"
		data-title={title ? "" : undefined}
	>
		{@render children?.()}
	</Alert.Description>
</Alert.Root>
