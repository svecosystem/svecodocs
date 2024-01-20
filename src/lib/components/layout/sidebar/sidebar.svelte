<script lang="ts">
	import SidebarNav from "./sidebar-nav.svelte";
</script>

<div>
	<div class="fixed z-30 hidden h-[calc(100vh-65px)] w-[220px] shrink-0 overflow-y-auto md:block">
		<div class="pr-4">
			<nav class="relative lg:text-sm lg:leading-6">
				<SidebarNav />
			</nav>
		</div>
	</div>
</div>
