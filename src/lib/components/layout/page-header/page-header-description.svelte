<script lang="ts">
	import { cn } from "$lib/utils/index.js";
	import Balancer from "svelte-wrap-balancer";
	let className: string | undefined | null = undefined;
	export { className as class };
</script>

<p class={cn("mt-4 text-lg text-muted-foreground", className)}>
	<Balancer>
		<slot />
	</Balancer>
</p>
