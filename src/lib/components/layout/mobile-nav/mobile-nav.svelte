<script lang="ts">
	import { Drawer } from "vaul-svelte";
	import { Separator } from "$lib/components/ui/separator";
	import { List, ArrowUpRight } from "phosphor-svelte";
	import { navigation, siteConfig } from "$lib/config";
	import MobileNavItem from "./mobile-nav-item.svelte";

	let open = false;
</script>

<Drawer.Root bind:open>
	<Drawer.Trigger class="size-5 md:hidden">
		<List class="size-5" />
	</Drawer.Trigger>
	<Drawer.Portal>
		<Drawer.Overlay class="fixed inset-0 z-[60] bg-black/40" />
		<Drawer.Content
			class="fixed bottom-0 left-0 right-0 z-[70] mt-24 flex h-[96%] flex-col rounded-t-[10px] bg-background"
		>
			<div class="flex-1 rounded-t-[10px] bg-card p-4">
				<div class="mx-auto mb-8 h-1.5 w-12 flex-shrink-0 rounded-full bg-primary/20" />
				<div class="mx-auto max-w-md">
					<Drawer.Title class="sr-only mb-4 font-medium">Navigation</Drawer.Title>
					<nav>
						<ul class="mb-8 flex w-full flex-col justify-center gap-8">
							{#each navigation.main as { href, title, external }}
								<li class="relative">
									<Drawer.Close asChild let:builder>
										<a
											{href}
											class="hover:text-brand h-full text-muted-foreground"
											target={external ? "_blank" : undefined}
											use:builder.action>{title}</a
										>
									</Drawer.Close>
								</li>
							{/each}
						</ul>
						<Separator />
						<ul class="flex w-full flex-col justify-center gap-4">
							{#each navigation.sidebar as navItem}
								<li class="mt-8">
									<MobileNavItem {navItem} />
								</li>
							{/each}
						</ul>
					</nav>
				</div>
			</div>
			<div class="mt-auto border-t border-border bg-primary/5 p-4">
				<div class="mx-auto flex max-w-md justify-end gap-6">
					<a
						class="gap-0.25 flex items-center text-xs text-muted-foreground"
						href={siteConfig.links.github}
						target="_blank"
					>
						GitHub
						<ArrowUpRight class="-mt-2 ml-0.5 h-3 w-3" />
					</a>
					<a
						class="gap-0.25 flex items-center text-xs text-muted-foreground"
						href={siteConfig.links.twitter}
						target="_blank"
					>
						Twitter
						<ArrowUpRight class="-mt-2 ml-0.5 h-3 w-3" />
					</a>
				</div>
			</div>
		</Drawer.Content>
	</Drawer.Portal>
</Drawer.Root>
