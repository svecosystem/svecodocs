<script lang="ts">
	import { ModeWatcher } from "mode-watcher";
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import DocsSidebar from "$lib/components/layout/docs-sidebar.svelte";
	import type { Snippet } from "svelte";
	import type { Navigation } from "$lib/types.js";
	import Header from "./header.svelte";
	import Footer from "./footer.svelte";

	let {
		children,
		navigation,
		logo,
		theme,
	}: { children?: Snippet; navigation: Navigation; logo: Snippet; theme?: string } = $props();
</script>

<a href="#main-content" class="sr-only">Skip to main content</a>
<ModeWatcher defaultTheme={theme} />
<Sidebar.Provider>
	<DocsSidebar {navigation} {logo} />
	<Sidebar.Inset>
		<Header />
		<div
			class="bg-background flex w-full flex-1 flex-row-reverse px-4 py-8 lg:pl-0 lg:pr-8 xl:gap-4"
			id="content"
		>
			{@render children?.()}
		</div>
		<Footer />
	</Sidebar.Inset>
</Sidebar.Provider>
