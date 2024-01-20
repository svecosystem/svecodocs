<script lang="ts">
	import { CopyCodeButton } from "$lib/components/index.js";
	import { cn, createCopyCodeButton } from "$lib/utils/index.js";

	let className: string | undefined | null = undefined;
	export { className as class };

	const { copyCode, copied, setCodeString } = createCopyCodeButton();
</script>

<pre
	class={cn(
		"group mb-4 mt-6 overflow-x-auto rounded-lg border border-border bg-primary/5 py-4",
		className
	)}
	use:setCodeString
	{...$$restProps}>
	<slot />
</pre>
<CopyCodeButton {copyCode} copied={$copied} class={cn("pre-copy-btn absolute right-4 top-4")} />
