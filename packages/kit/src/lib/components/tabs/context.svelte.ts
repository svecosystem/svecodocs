import { getContext, setContext } from "svelte";

const TABS_KEY = Symbol("svecodocs-tabs");

class TabsContext {
	items = $state<string[]>([]);
	constructor() {}

	/** Registers an item and returns a function to unregister it. */
	registerItem = (item: string) => {
		this.items.push(item);

		return () => {
			this.items = this.items.filter((i) => i !== item);
		};
	};
}

export function useTabs(root: boolean = false): TabsContext {
	if (root) {
		return setContext(TABS_KEY, new TabsContext());
	}
	return getContext(TABS_KEY);
}
