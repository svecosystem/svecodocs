<script lang="ts">
	import { setContext, type Snippet } from "svelte";

	let { children, cols = 2 }: { children?: Snippet; cols?: number } = $props();

	// so tailwind can read them, prob should just do the style directly instead
	function getCols() {
		if (cols === 1) {
			return "grid-cols-1";
		} else if (cols === 2) {
			return "grid-cols-2";
		} else if (cols === 3) {
			return "grid-cols-3";
		} else if (cols === 4) {
			return "grid-cols-4";
		}
	}

	setContext("is-grid", true);
</script>

<div class="grid {getCols()} mt-6 gap-5" data-card-grid="">
	{@render children?.()}
</div>
