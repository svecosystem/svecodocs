<script lang="ts">
	import type { HTMLAnchorAttributes } from "svelte/elements";
	import { Drawer } from "vaul-svelte";

	type $$Props = HTMLAnchorAttributes;

	export let href: $$Props["href"] = "";
</script>

<Drawer.Close asChild let:builder>
	<a use:builder.action {href} {...$$restProps}>
		<slot />
	</a>
</Drawer.Close>
