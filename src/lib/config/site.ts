export const siteConfig = {
	name: "Svecosystem Docs Starter",
	url: "https://svecosystem.com",
	description: "Componentized & accessible forms for SvelteKit.",
	links: {
		x: "https://x.com/huntabyte",
		github: "https://github.com/svecosystem"
	},
	author: "Huntabyte",
	keywords: "Svelte ecosystem,ecosystem,svecosystem,sveltekit,svelte libraries",
	ogImage: {
		url: "https://www.svecosystem.com/og.png",
		width: "1200",
		height: "630"
	},
	license: {
		name: "MIT",
		url: "https://github.com/svecosystem/svecodocs/blob/main/LICENSE"
	}
};

export type SiteConfig = typeof siteConfig;
