<script lang="ts">
	import { navigation } from "$lib/config";
</script>

<div class="hidden items-center justify-center lg:flex">
	<ul role="navigation" class="flex w-full items-center justify-center gap-8">
		{#each navigation.main as { href, title, external }}
			<li class="relative">
				<a
					{href}
					class="hover:text-brand text-sm text-muted-foreground"
					target={external ? "_blank" : undefined}>{title}</a
				>
			</li>
		{/each}
	</ul>
</div>
