<script lang="ts">
	import MagnifyingGlass from "phosphor-svelte/lib/MagnifyingGlass";
	import { onMount } from "svelte";
	import { Command, Dialog } from "bits-ui";
	import { type SearchContent, createContentIndex, searchContentIndex } from "./search-utils.js";

	let searchState = $state<"loading" | "ready">("loading");
	let searchQuery = $state("");

	onMount(async () => {
		const content = await fetch("/api/search.json").then((res) => res.json());
		if (!content) return;
		createContentIndex(content);
		searchState = "ready";
	});

	const results: SearchContent[] = $derived.by(() => {
		if (searchState === "ready") {
			return searchContentIndex(searchQuery);
		}
		return [];
	});

	let dialogOpen = $state(false);

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
			e.preventDefault();
			dialogOpen = true;
		}
	}
</script>

<svelte:document onkeydown={handleKeydown} />

<Dialog.Root
	bind:open={dialogOpen}
	onOpenChange={(o) => {
		if (!o) {
			searchQuery = "";
		}
	}}
>
	<Dialog.Trigger
		class="text-muted-foreground relative inline-flex h-9 select-none items-center justify-between gap-3 whitespace-nowrap rounded-lg bg-gray-200/75 px-3 text-sm font-normal transition-colors hover:bg-gray-300/60 md:w-60 dark:bg-gray-800/70 dark:hover:bg-gray-800"
	>
		<span class="flex items-center gap-2">
			<MagnifyingGlass class="size-5" aria-label="Magnifying Glass" />Search Docs ...
		</span>
		<span class="flex items-center gap-[1px]">
			<kbd
				class="bg-foreground/7 pointer-events-none hidden h-4 select-none items-center gap-1 rounded-sm border px-1 font-mono text-[10px] font-medium opacity-100 sm:flex dark:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.07)]"
			>
				<span class="text-xs">⌘</span>
			</kbd>
			<kbd
				class="bg-foreground/7 pointer-events-none hidden h-4 select-none items-center gap-1 rounded-sm border px-1 font-mono text-[10px] font-medium opacity-100 sm:flex dark:shadow-[0px_2px_0px_0px_rgba(0,0,0,0.07)]"
			>
				K
			</kbd>
		</span>
	</Dialog.Trigger>
	<Dialog.Portal>
		<Dialog.Overlay
			class="data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/20 dark:bg-black/80"
		/>
		<Dialog.Content
			class="bg-background shadow-popover data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-top-[48%] fixed left-[50%] top-[20%] z-50 w-full max-w-[94%] translate-x-[-50%] translate-y-[0%] rounded-lg outline-none sm:max-w-[490px] md:w-full"
			onCloseAutoFocus={(e) => {
				e.preventDefault();
			}}
		>
			<Dialog.Title class="sr-only">Search</Dialog.Title>
			<Dialog.Description class="sr-only">Search for documentation</Dialog.Description>
			<Command.Root
				shouldFilter={false}
				class="bg-background flex h-full w-full flex-col self-start rounded-lg border border-transparent"
			>
				<Command.Input
					bind:value={searchQuery}
					autocomplete="off"
					spellcheck="false"
					type="search"
					class="bg-background placeholder:text-foreground-alt/50 inline-flex h-10 w-full truncate rounded-lg px-4 text-sm transition-colors focus:outline-none focus:ring-0"
					placeholder="Search for something..."
				/>
				{#if searchQuery !== "" && results.length === 0}
					<Command.Empty
						forceMount
						class="text-foreground flex w-full items-center justify-center border-t pb-6 pt-8 text-sm"
					>
						No results found.
					</Command.Empty>
				{/if}

				{#if searchQuery !== "" && results.length > 0}
					<Command.List
						class="max-h-[280px] overflow-y-auto overflow-x-hidden border-t px-2 pb-2 pt-2"
					>
						<Command.Viewport>
							{#if searchState === "loading"}
								<Command.Loading>Loading...</Command.Loading>
							{/if}

							{#each results as result (result.title + result.href)}
								<Command.LinkItem
									href={result.href}
									class="dark:data-selected:bg-primary-hover data-selected:bg-gray-200/70 flex h-10 cursor-pointer select-none items-center gap-2 rounded-md px-3 py-2.5 text-sm outline-none"
									onSelect={() => {
										searchQuery = "";
										dialogOpen = false;
									}}
									value={result.title}
								>
									{result.title}
								</Command.LinkItem>
							{/each}
						</Command.Viewport>
					</Command.List>
				{/if}
			</Command.Root>
		</Dialog.Content>
	</Dialog.Portal>
</Dialog.Root>
