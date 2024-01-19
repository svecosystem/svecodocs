<script lang="ts">
	import { navigation } from "$lib/config";
</script>

<nav class="text-sm font-semibold leading-6 text-muted-foreground">
	<ul class="flex space-x-8">
		<li>
			{#each navigation.main as { href, title }}
				<a {href}>{title}</a>
			{/each}
		</li>
	</ul>
</nav>
