<script lang="ts" module>
	import type { WithElementRef } from "bits-ui";
	import type { HTMLAnchorAttributes, HTMLButtonAttributes } from "svelte/elements";
	import { type VariantProps, tv } from "tailwind-variants";

	export const buttonVariants = tv({
		base: "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-semibold tracking-wide active:scale-[99%] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
		variants: {
			variant: {
				default:
					"bg-foreground text-background dark:hover:bg-foreground hover:bg-foreground/90 active:bg-foreground/85 dark:active:bg-foreground shadow-foreground/20 inset-shadow-xs inset-shadow-background/10 dark:inset-shadow-background/20 dark:ring-foreground/20 ring-foreground/90 inset-ring inset-ring-background/5 shadow-sm ring dark:shadow-none dark:hover:brightness-[105%] dark:active:brightness-[110%]",
				destructive:
					"bg-destructive inset-shadow-lg inset-shadow-sm inset-shadow-white/20 inset-ring inset-ring-foreground/5 ring-destructive-border text-destructive-foreground shadow-sm ring hover:brightness-[105%] active:brightness-[110%]",
				outline:
					"ring-foreground hover:bg-foreground/5 hover:text-foreground text-foreground hover:ring-foreground bg-transparent ring",
				ghost: "text-foreground hover:bg-foreground/5 hover:ring-foreground/5 bg-transparent ring ring-transparent",
				link: "text-brand-link hover:text-brand-link-hover cursor-pointer underline-offset-4 hover:underline",
				subtle: "text-foreground hover:text-foreground bg-foreground/5 hover:bg-foreground/10",
				brand: "bg-brand inset-shadow-lg inset-shadow-sm inset-shadow-white/20 inset-ring inset-ring-foreground/5 ring-brand-border text-brand-foreground shadow-sm ring hover:brightness-[105%] active:brightness-[110%]",
			},
			size: {
				default: "h-10 px-5 py-2.5",
				sm: "h-9 rounded-md px-3.5 py-2",
				lg: "h-11 rounded-md px-8",
				icon: "h-10 w-10 rounded-md",
				"icon-sm": "h-8 w-8 rounded-md",
			},
		},
		defaultVariants: {
			variant: "default",
			size: "default",
		},
	});

	export type ButtonVariant = VariantProps<typeof buttonVariants>["variant"];
	export type ButtonSize = VariantProps<typeof buttonVariants>["size"];

	export type ButtonProps = WithElementRef<HTMLButtonAttributes> &
		WithElementRef<HTMLAnchorAttributes> & {
			variant?: ButtonVariant;
			size?: ButtonSize;
		};
</script>

<script lang="ts">
	import { cn } from "$lib/utils.js";

	let {
		class: className,
		variant = "default",
		size = "default",
		ref = $bindable(null),
		href = undefined,
		type = "button",
		children,
		...restProps
	}: ButtonProps = $props();
</script>

{#if href}
	<a
		bind:this={ref}
		class={cn(buttonVariants({ variant, size, className }))}
		{href}
		{...restProps}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		bind:this={ref}
		class={cn(buttonVariants({ variant, size, className }))}
		{type}
		{...restProps}
	>
		{@render children?.()}
	</button>
{/if}
