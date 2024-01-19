<script lang="ts">
	import { cn } from "$lib/utils/index.js";
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<header class={cn("relative pb-8", className)}>
	<slot />
</header>
