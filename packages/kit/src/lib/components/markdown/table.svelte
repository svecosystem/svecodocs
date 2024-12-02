<script lang="ts">
	import type { HTMLAttributes } from "svelte/elements";
	import { cn } from "$lib/utils.js";

	let { class: className, children, ...restProps }: HTMLAttributes<HTMLTableElement> = $props();
</script>

<div class="my-6 w-full overflow-y-auto">
	<table class={cn("w-full rounded-lg", className)} {...restProps}>
		{@render children?.()}
	</table>
</div>
