<script lang="ts">
	import A from "$lib/components/markdown/a.svelte";
	import { siteConfig } from "$lib/config";
	import FooterIcons from "./footer-icons.svelte";
	import FooterNav from "./footer-nav.svelte";
</script>

<footer class="mt-4 border-t border-border text-sm leading-6">
	<div
		class="mx-auto flex h-16 max-w-8xl items-center justify-between gap-3 px-4 text-foreground/80 sm:px-6 lg:px-8"
	>
		<div class="flex items-center gap-2 lg:flex-1">
			<A href={siteConfig.license.url}>
				{siteConfig.license.name}
			</A>
			<p>&copy; {new Date().getFullYear()} Svecosystem Team</p>
		</div>
		<FooterNav />
		<FooterIcons />
	</div>
</footer>
