<script lang="ts">
	import * as Sidebar from "$lib/components/ui/sidebar/index.js";
	import { page } from "$app/stores";
	import type { Navigation, SidebarNavSection } from "$lib/types.js";
	import type { Snippet } from "svelte";

	let { navigation, logo }: { navigation: Navigation; logo: Snippet } = $props();
</script>

<Sidebar.Root>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton
					size="lg"
					class="hover:bg-background-secondary active:bg-background-secondary dark:hover:bg-background-secondary dark:active:bg-background-secondary [&>svg]:size-0 [&>svg]:h-7 [&>svg]:w-auto"
				>
					{#snippet child({ props })}
						<a href="/docs" {...props}>
							{@render logo()}
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Separator />
	<Sidebar.Content class="pt-4">
		{#if navigation?.anchors?.length}
			<Sidebar.Group>
				<Sidebar.Menu>
					{#each navigation.anchors as anchor (anchor.title + anchor.href)}
						{@const isExternal = !anchor.href.startsWith("/")}
						<Sidebar.MenuItem>
							<Sidebar.MenuButton
								class="h-9 gap-2 font-medium"
								isActive={anchor.href === $page.url.pathname}
							>
								{#snippet child({ props })}
									<a
										href={anchor.href}
										{...props}
										target={isExternal ? "_blank" : undefined}
									>
										<anchor.icon class="!size-[22px]" />
										{anchor.title}
									</a>
								{/snippet}
							</Sidebar.MenuButton>
						</Sidebar.MenuItem>
					{/each}
				</Sidebar.Menu>
			</Sidebar.Group>
			<Sidebar.Separator />
		{/if}

		{#if navigation?.sections}
			{#each navigation.sections as section, i (section.title)}
				{#if section.title}
					{@render GroupSection({
						section,
						isLast: i === navigation.sections.length - 1,
					})}
				{:else}
					{@render SectionMenu({ section })}
				{/if}
			{/each}
		{/if}
	</Sidebar.Content>
</Sidebar.Root>

{#snippet SectionMenu({ section }: { section: SidebarNavSection })}
	<Sidebar.Menu>
		{#each section.items as subItem (subItem.title)}
			<Sidebar.MenuItem>
				{@const isActive = subItem.href === $page.url.pathname}
				<Sidebar.MenuButton {isActive}>
					{#snippet child({ props })}
						<a href={subItem.href} {...props}>{subItem.title}</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		{/each}
	</Sidebar.Menu>
{/snippet}

{#snippet GroupSection({
	section,
	isLast = true,
}: {
	section: SidebarNavSection;
	isLast?: boolean;
})}
	<Sidebar.Group>
		<Sidebar.GroupLabel>{section.title}</Sidebar.GroupLabel>
		{@render SectionMenu({ section })}
	</Sidebar.Group>
	{#if !isLast}
		<Sidebar.Separator />
	{/if}
{/snippet}
