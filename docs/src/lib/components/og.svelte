<script lang="ts">
	import LogoLight from "$lib/components/logos/svecosystem-light.svelte";

	let { title, description }: { title: string; description: string } = $props();
</script>

<div
	class="relative flex h-[630px] w-[1200px] flex-col justify-center bg-[url(/orange-og-bg.png)] bg-center bg-no-repeat"
>
	<div class="absolute left-0 top-0 p-8">
		<LogoLight class="h-8 w-auto" />
	</div>
	<div class="absolute bottom-0 right-0 p-8">
		<LogoLight class="h-8 w-auto" />
	</div>

	<div class="p-8">
		<h1 class="text-[90px] font-semibold tracking-[-0.15rem]">{title}</h1>
		<p class="text-[36px] text-gray-700">
			{description}
		</p>
	</div>
</div>
