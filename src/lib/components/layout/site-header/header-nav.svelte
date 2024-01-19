<script lang="ts">
	import { navigation } from "$lib/config";
</script>

<ul role="navigation" class="hidden items-center gap-x-8 lg:flex">
	<li class="relative">
		{#each navigation.main as { href, title }}
			<a {href} class="hover:text-brand text-sm text-muted-foreground">{title}</a>
		{/each}
	</li>
</ul>
