<script lang="ts">
	import { cn } from "$lib/utils.js";
	import type { WithElementRef } from "bits-ui";
	import type { Snippet } from "svelte";
	import type { HTMLAnchorAttributes, MouseEventHandler } from "svelte/elements";
	import { useSidebar } from "./context.svelte.js";

	let {
		ref = $bindable(null),
		children,
		child,
		class: className,
		size = "md",
		isActive,
		onclick: onclickProp,
		...restProps
	}: WithElementRef<HTMLAnchorAttributes> & {
		child?: Snippet<[{ props: Record<string, unknown> }]>;
		size?: "sm" | "md";
		isActive?: boolean;
	} = $props();

	const sidebar = useSidebar();

	const handleClick: MouseEventHandler<HTMLAnchorElement> = (e) => {
		onclickProp?.(e);
		if (e.defaultPrevented) return;
		if (sidebar.isMobile && sidebar.state === "expanded") {
			sidebar.toggle();
		}
	};

	const mergedProps = $derived({
		class: cn(
			"text-foreground ring-sidebar-ring hover:bg-primary-hover hover:text-foreground active:bg-primary-active active:text-foreground [&>svg]:text-foreground flex h-7 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0 select-none",
			"data-[active=true]:bg-primary-hover data-[active=true]:text-foreground",
			size === "sm" && "text-xs",
			size === "md" && "text-sm",
			"group-data-[collapsible=icon]:hidden",
			className
		),
		"data-sidebar": "menu-sub-button",
		"data-size": size,
		"data-active": isActive,
		onclick: handleClick,
		...restProps,
	});
</script>

{#if child}
	{@render child({ props: mergedProps })}
{:else}
	<a bind:this={ref} {...mergedProps}>
		{@render children?.()}
	</a>
{/if}
