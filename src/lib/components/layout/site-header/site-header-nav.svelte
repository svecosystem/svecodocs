<script lang="ts">
	import { navigation } from "$lib/config";
</script>

<nav class="hidden items-center justify-center lg:flex">
	<ul class="flex w-full items-center justify-center gap-8">
		{#each navigation.main as { href, title, external }}
			<li class="relative">
				<a
					{href}
					class="text-sm text-muted-foreground hover:text-brand"
					target={external ? "_blank" : undefined}>{title}</a
				>
			</li>
		{/each}
	</ul>
</nav>
