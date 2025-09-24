<script lang="ts">
	import type { Contributor } from "$lib/types.js";
	import { Avatar } from "bits-ui";
	import H2 from "./markdown/h2.svelte";

	let { contributors }: { contributors: Contributor[] } = $props();
</script>

{#if contributors.length > 0}
	<H2 id="contributors">Contributors</H2>
	<p></p>
	<div class="mt-6 flex select-none flex-wrap gap-1.5">
		{#each contributors as contributor (contributor.login)}
			<a
				href="https://github.com/{contributor.login}"
				target="_blank"
				class="group flex items-center gap-2 rounded-lg px-2 py-1.5"
			>
				<Avatar.Root
					class="border-foreground/50 group-hover:border-foreground size-8 rounded-full border"
					loadingStatus="loaded"
				>
					<Avatar.Image
						class="rounded-full"
						src={contributor.avatar_url}
						alt={contributor.name}
					/>
				</Avatar.Root>
				<span class="underline-offset-2 group-hover:underline"
					>{contributor.name ?? contributor.login}</span
				>
			</a>
		{/each}
	</div>
{/if}
