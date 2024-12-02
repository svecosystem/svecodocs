<script lang="ts">
	import { Button } from "$lib/components/ui/button/index.js";
	import GithubIcon from "$lib/components/icons/github-icon.svelte";
	import XComIcon from "$lib/components/icons/xcom-icon.svelte";
	import { useSiteConfig } from "$lib/hooks/use-site-config.svelte.js";
	import type { Component } from "svelte";
	import { cn } from "$lib/utils.js";

	const siteConfig = useSiteConfig();
</script>

{#snippet SocialButton({
	href,
	icon,
	ariaLabel,
	className,
}: {
	href: string;
	icon: Component;
	ariaLabel: string;
	className?: string;
})}
	{@const Icon = icon}
	<Button
		{href}
		target="_blank"
		rel="noopener noreferrer"
		aria-label={ariaLabel}
		variant="ghost"
		size="icon"
		class={cn("[&>svg]:size-5", className)}
	>
		<Icon />
	</Button>
{/snippet}

<div class="flex items-center">
	{#if siteConfig.current.links?.github}
		{@render SocialButton({
			href: siteConfig.current.links.github,
			icon: GithubIcon,
			ariaLabel: "View this project on GitHub",
		})}
	{/if}
	{#if siteConfig.current.links?.x}
		{@render SocialButton({
			href: siteConfig.current.links.x,
			icon: XComIcon,
			ariaLabel: "Follow on X (formerly known as Twitter)",
			className: "[&>svg]:size-[18px]",
		})}
	{/if}
</div>
