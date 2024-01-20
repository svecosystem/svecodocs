<script lang="ts">
	import { GitHubLogo } from "$lib/components/logos";
	import { Button } from "$lib/components/ui/button";
	import FeatureCard from "$lib/components/feature-card.svelte";
</script>

<span class="gradient"></span>
<div class="container relative mx-auto max-w-5xl py-20 sm:py-28 md:py-32">
	<h1
		class="text-balance text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
	>
		Documentation doesn't have to be so <span class="text-brand">difficult</span>
	</h1>
	<p class="mx-auto mt-6 max-w-3xl text-center text-base sm:text-lg">
		An opinionated template for easily creating documentation sites with SvelteKit and Markdown.
		Built and maintained by the <a
			href="https://github.com/svecosystem"
			target="_blank"
			class="font-medium text-brand">Svecosystem</a
		> team.
	</p>
	<div class="mt-6 flex items-center justify-center gap-4">
		<Button href="/docs/introduction" variant="brand">Get Started</Button>
		<Button href="https://github.com/svecosystem/svecodocs" variant="outline">
			<GitHubLogo class="mr-2 h-4 w-4" />
			View on GitHub
		</Button>
	</div>
</div>
<section class="relative mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-32 lg:px-8">
	<h2 class="mb-10 text-balance text-center text-3xl font-bold tracking-tight lg:text-4xl">
		A few notable <span class="text-brand">features</span>
	</h2>
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8">
		<FeatureCard title="Markdown Support" icon="code">
			Nothing beats the simplicity of Markdown for writing your documentation.
		</FeatureCard>
		<FeatureCard title="Code Highlighting">
			Codeblocks highlighted by Shiki, the same library used by VSCode.
		</FeatureCard>
		<FeatureCard title="Markdown Support" icon="code">
			Nothing beats the simplicity of Markdown for writing your documentation.
		</FeatureCard>
		<FeatureCard title="Code Highlighting">
			Codeblocks highlighted by Shiki, the same library used by VSCode.
		</FeatureCard>
		<FeatureCard title="Markdown Support" icon="code">
			Nothing beats the simplicity of Markdown for writing your documentation.
		</FeatureCard>
		<FeatureCard title="Code Highlighting">
			Codeblocks highlighted by Shiki, the same library used by VSCode.
		</FeatureCard>
	</div>
</section>

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
