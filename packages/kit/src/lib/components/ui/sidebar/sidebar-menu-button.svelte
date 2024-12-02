<script lang="ts" module>
	import { tv, type VariantProps } from "tailwind-variants";

	export const sidebarMenuButtonVariants = tv({
		base: "peer/menu-button active:text-foreground data-[active=true]:text-foreground data-[state=open]:hover:text-foreground flex w-full select-none items-center gap-2 overflow-hidden rounded-lg p-2 text-left transition-[width,height,padding] disabled:pointer-events-none disabled:opacity-50 group-has-[[data-sidebar=menu-action]]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 group-data-[collapsible=icon]:!size-8 group-data-[collapsible=icon]:!p-2 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
		variants: {
			variant: {
				default:
					"dark:hover:bg-primary-hover dark:active:bg-primary-active dark:data-[active=true]:bg-primary-active dark:data-[state=open]:hover:primary-hover hover:bg-gray-200/60 active:bg-gray-200/70 data-[active=true]:bg-gray-200/70 data-[state=open]:hover:bg-gray-200/60",
			},
			size: {
				default: "h-8 text-sm",
				sm: "h-7 text-xs",
				lg: "h-12 text-sm group-data-[collapsible=icon]:!p-0",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	});

	export type SidebarMenuButtonVariant = VariantProps<
		typeof sidebarMenuButtonVariants
	>["variant"];
	export type SidebarMenuButtonSize = VariantProps<typeof sidebarMenuButtonVariants>["size"];
</script>

<script lang="ts">
	import * as Tooltip from "$lib/components/ui/tooltip/index.js";
	import { cn } from "$lib/utils.js";
	import { mergeProps, type WithElementRef, type WithoutChildrenOrChild } from "bits-ui";
	import type { ComponentProps, Snippet } from "svelte";
	import type { HTMLAttributes, MouseEventHandler } from "svelte/elements";
	import { useSidebar } from "./context.svelte.js";

	let {
		ref = $bindable(null),
		class: className,
		children,
		child,
		variant = "default",
		size = "default",
		isActive = false,
		tooltipContent,
		tooltipContentProps,
		onclick: onclickProp,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
		isActive?: boolean;
		variant?: SidebarMenuButtonVariant;
		size?: SidebarMenuButtonSize;
		tooltipContent?: Snippet;
		tooltipContentProps?: WithoutChildrenOrChild<ComponentProps<typeof Tooltip.Content>>;
		child?: Snippet<[{ props: Record<string, unknown> }]>;
	} = $props();

	const sidebar = useSidebar();

	const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
		onclickProp?.(e);
		if (e.defaultPrevented) return;
		if (sidebar.isMobile && sidebar.state === "expanded") {
			sidebar.toggle();
		}
	};

	const buttonProps = $derived({
		class: cn(sidebarMenuButtonVariants({ variant, size }), className),
		"data-sidebar": "menu-button",
		"data-size": size,
		"data-active": isActive,
		onclick: handleClick,
		...restProps,
	});
</script>

{#snippet Button({ props }: { props?: Record<string, unknown> })}
	{@const mergedProps = mergeProps(buttonProps, props)}
	{#if child}
		{@render child({ props: mergedProps })}
	{:else}
		<button bind:this={ref} {...mergedProps}>
			{@render children?.()}
		</button>
	{/if}
{/snippet}

{#if !tooltipContent}
	{@render Button({})}
{:else}
	<Tooltip.Root>
		<Tooltip.Trigger>
			{#snippet child({ props })}
				{@render Button({ props })}
			{/snippet}
		</Tooltip.Trigger>
		<Tooltip.Content
			side="right"
			align="center"
			hidden={sidebar.state !== "collapsed" || sidebar.isMobile}
			children={tooltipContent}
			{...tooltipContentProps}
		/>
	</Tooltip.Root>
{/if}
