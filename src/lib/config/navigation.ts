export type NavItem = {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	label?: string;
};

export type SidebarNavItem = NavItem & {
	items: SidebarNavItem[];
};

export type NavItemWithChildren = NavItem & {
	items: NavItemWithChildren[];
};

export type Navigation = {
	main: NavItem[];
	sidebar: SidebarNavItem[];
};

export const navigation: Navigation = {
	main: [
		{
			title: "Documentation",
			href: "/docs"
		},
		{
			title: "Svecosystem",
			href: "https://svecosystem.com",
			external: true
		},
		{
			title: "Releases",
			href: "https://github.com/svecosystem/mode-watcher/releases",
			external: true
		}
	],
	sidebar: [
		{
			title: "Overview",
			items: [
				{
					title: "Introduction",
					href: "/docs/introduction",
					items: []
				},
				{
					title: "Getting Started",
					href: "/docs/getting-started",
					items: []
				}
			]
		},
		{
			title: "API Reference",
			items: [
				{
					title: "Root",
					href: "/docs/api-reference/root",
					items: []
				}
			]
		}
	]
};
