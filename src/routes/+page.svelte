<script lang="ts">
	import { GitHubLogo } from "$lib/components/logos";
	import { Button } from "$lib/components/ui/button";
</script>

<span class="gradient"></span>
<div class="relative mx-auto max-w-4xl py-24 sm:py-32 md:py-40">
	<h1 class="text-balance text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
		<span class="text-brand">Svecosystem</span> Docs Template
	</h1>
	<p class="mx-auto mt-4 max-w-3xl text-balance text-center text-xl">
		An opinionated template for creating documentation sites with SvelteKit and Markdown.
	</p>
	<div class="mt-6 flex items-center justify-center gap-4">
		<Button href="/docs/introduction" variant="brand">Get Started</Button>
		<Button href="/docs/introduction" variant="outline">
			<GitHubLogo class="mr-2 h-4 w-4" />
			View on GitHub
		</Button>
	</div>
</div>

<style>
	.gradient {
		background: radial-gradient(50% 50% at 50% 50%, #dc7900 0, #dc790000);
		filter: blur(180px);
		height: 30vh;
		opacity: 0.5;
		position: fixed;
		top: 25vh;
		width: 100%;
		z-index: -1;
	}
</style>
