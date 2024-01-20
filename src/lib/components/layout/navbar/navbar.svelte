<script lang="ts">
	import NavbarLogo from "./navbar-logo.svelte";
	import NavbarNav from "./navbar-nav.svelte";
	import NavbarIcons from "./navbar-icons.svelte";
</script>

<header class="sticky top-0 z-50 -mb-px border-b border-border bg-background/75 backdrop-blur">
	<div class="mx-auto flex h-16 max-w-8xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
		<NavbarLogo />
		<NavbarNav />
		<NavbarIcons />
	</div>
</header>
