import type { Navigation, NavigationNeighbor, NavigationNeighbors } from "@svecodocs/kit";

export type NavigationNeighborMap = Map<string, NavigationNeighbors>;

function flatNavigationAnchors(navigationAnchors: Navigation["anchors"]): NavigationNeighbor[] {
	if (!navigationAnchors) {
		return [];
	}
	return navigationAnchors.filter((anchor) => !anchor.disabled);
}

function flatNavigationSections(navigationSections: Navigation["sections"]): NavigationNeighbor[] {
	const sections: NavigationNeighbor[] = [];

	if (!navigationSections) {
		return sections;
	}

	for (const section of navigationSections) {
		if (section?.items) {
			for (const navigation of section.items) {
				if (!navigation.disabled && navigation.href) {
					sections.push({
						title: navigation.title,
						description: navigation.description || "",
						href: navigation.href,
					});
				}
			}
		}
	}
	return sections;
}

export function getFlattenedNavigableItems(navigationConfig: Navigation): NavigationNeighbor[] {
	const anchors = flatNavigationAnchors(navigationConfig.anchors);
	const sections = flatNavigationSections(navigationConfig.sections);
	return [...anchors, ...sections];
}

export function preCalculateNavigationNeighbors(navigation: Navigation): NavigationNeighborMap {
	const navigableItems = getFlattenedNavigableItems(navigation);
	const lookupMap: NavigationNeighborMap = new Map();

	const { length } = navigableItems;
	for (let i = 0; i < length; i++) {
		const previous = i > 0 ? navigableItems[i - 1] : undefined;
		const next = i < length - 1 ? navigableItems[i + 1] : undefined;
		lookupMap.set(navigableItems[i].href, { previous, next });
	}

	return lookupMap;
}
