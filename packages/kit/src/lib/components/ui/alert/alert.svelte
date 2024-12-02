<script lang="ts" module>
	import { type VariantProps, tv } from "tailwind-variants";

	export const alertVariants = tv({
		base: "inset-shadow-sm relative rounded-xl px-4 pb-4 pt-[22px] ring [&>svg+h5]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-6",
		variants: {
			variant: {
				note: "inset-shadow-sky-200/15 dark:inset-shadow-sky-900/15 bg-sky-100/70 ring-sky-200/50 dark:bg-sky-500/5 dark:ring-sky-500/10 [&>div>p]:text-sky-950 dark:[&>div>p]:text-sky-50 [&>h5]:text-sky-700/90 dark:[&>h5]:text-sky-300/90 [&>svg]:text-sky-700/90 dark:[&>svg]:text-sky-300/90",
				danger: "inset-shadow-red-200/15 dark:inset-shadow-red-900/15 bg-rose-100/70 ring-red-200/50 dark:bg-rose-500/5 dark:ring-red-500/10 [&>div>p]:text-red-950 dark:[&>div>p]:text-red-50 [&>h5]:text-red-700/90 dark:[&>h5]:text-red-300/90 [&>svg]:text-red-700/90 dark:[&>svg]:text-red-300/90",
				tip: "inset-shadow-fuchsia-200/15 dark:inset-shadow-fuchsia-900/15 bg-fuchsia-100/70 ring-fuchsia-200/50 dark:bg-fuchsia-500/5 dark:ring-fuchsia-500/10 [&>div>p]:text-fuchsia-950 dark:[&>div>p]:text-fuchsia-50 [&>h5]:text-fuchsia-700/90 dark:[&>h5]:text-fuchsia-300/90 [&>svg]:text-fuchsia-700/90 dark:[&>svg]:text-fuchsia-300/90",
				warning:
					"inset-shadow-amber-200/15 dark:inset-shadow-amber-900/15 bg-amber-100/70 ring-amber-200/50 dark:bg-amber-500/5 dark:ring-amber-500/10 [&>div>p]:text-amber-950 dark:[&>div>p]:text-amber-50 [&>h5]:text-amber-700/90 dark:[&>h5]:text-amber-300/90 [&>svg]:text-amber-700/90 dark:[&>svg]:text-amber-300/90",
				success:
					"inset-shadow-green-200/15 dark:inset-shadow-green-900/15 bg-green-100/70 ring-green-200/50 dark:bg-green-500/5 dark:ring-green-500/10 [&>div>p]:text-green-950 dark:[&>div>p]:text-green-50 [&>h5]:text-green-700/90 dark:[&>h5]:text-green-300/90 [&>svg]:text-green-700/90 dark:[&>svg]:text-green-300/90",
			},
		},
		defaultVariants: {
			variant: "note",
		},
	});

	export type AlertVariant = VariantProps<typeof alertVariants>["variant"];
</script>

<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import type { WithElementRef } from "bits-ui";
	import { cn } from "$lib/utils.js";

	let {
		ref = $bindable(null),
		class: className,
		variant = "note",
		children,
		...restProps
	}: WithElementRef<HTMLAttributes<HTMLDivElement>> & {
		variant?: AlertVariant;
	} = $props();
</script>

<div bind:this={ref} class={cn(alertVariants({ variant }), className)} {...restProps} role="alert">
	{@render children?.()}
</div>
