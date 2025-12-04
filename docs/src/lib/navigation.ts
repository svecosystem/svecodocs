import { defineNavigation } from "@svecodocs/kit";
import ChalkboardTeacher from "phosphor-svelte/lib/ChalkboardTeacher";
import RocketLaunch from "phosphor-svelte/lib/RocketLaunch";
import Tag from "phosphor-svelte/lib/Tag";
import { getAllDocs } from "./utils.js";
import type { Doc } from "$content/index";
import { preCalculateNavigationNeighbors } from "$lib/navigation-neighbors";

const allDocs = getAllDocs();

export function getSectionDocs(section: Doc["section"], pathPrefix = "/docs/") {
	return allDocs
		.filter((doc) => doc.section === section)
		.map((doc) => ({
			title: doc.title,
			href: `${pathPrefix}${doc.slug}`,
			description: doc.description,
		}));
}

const components = getSectionDocs("Components");

const configuration = getSectionDocs("Configuration");

export const navigation = defineNavigation({
	anchors: [
		{
			title: "Introduction",
			href: "/docs",
			description: "What exactly is Svecodocs?",
			icon: ChalkboardTeacher,
		},
		{
			title: "Getting Started",
			href: "/docs/getting-started",
			description: "A quick guide to get started using Svecodocs",
			icon: RocketLaunch,
		},
		{
			title: "Releases",
			description: "See the latest changes and updates",
			href: "https://github.com/svecosystem/svecodocs/releases",
			icon: Tag,
		},
	],
	sections: [
		{
			title: "Configuration",
			items: configuration,
		},
		{
			title: "Components",
			items: components,
		},
	],
});

export const neighborLookup = preCalculateNavigationNeighbors(navigation);

export function getNavigationNeighbors(pathname: string) {
	return neighborLookup.get(pathname);
}
