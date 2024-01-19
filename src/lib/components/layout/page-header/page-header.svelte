<script lang="ts">
	import { cn } from "$lib/utils/index.js";
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<header class={cn("relative border-b border-border pb-8", className)}>
	<slot />
</header>
