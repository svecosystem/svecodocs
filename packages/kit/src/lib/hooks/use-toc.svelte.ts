import { untrack } from "svelte";
import { page } from "$app/state";
import { addEventListener } from "svelte-toolbelt";

export type TocItem = {
	title: string;
	url: string;
	items?: TocItem[];
};

export type TableOfContents = {
	items?: TocItem[];
};

export function useToc(getItemIds: () => string[]) {
	const itemIds = $derived(getItemIds());
	let activeId = $state<string | null>(null);
	const urlHash = $derived(page.url.hash);
	const isAtBottom = useIsAtBottom();

	let markerTopStyle = $state("0px");
	let markerHeightStyle = $state("20px");

	$effect(() => {
		if (!activeId) {
			markerTopStyle = "0px";
			return;
		}

		requestAnimationFrame(() => {
			const tocContainer = document.querySelector("[data-toc-container]");
			if (!tocContainer) return;

			const tocLinks = Array.from(tocContainer.querySelectorAll("a[href]"));

			let targetIndex = -1;
			let targetElement: Element | null = null;
			for (let i = 0; i < tocLinks.length; i++) {
				const href = tocLinks[i].getAttribute("href");
				if (href && href.includes(`#${activeId}`)) {
					targetIndex = i;
					targetElement = tocLinks[i];
					break;
				}
			}

			if (targetIndex === -1 || !targetElement) {
				const oldIndex = itemIds.findIndex((id) => id === activeId);
				markerTopStyle = oldIndex * 28 + "px";
				markerHeightStyle = "20px";
				return;
			}

			let totalHeight = 0;
			for (let i = 0; i < targetIndex; i++) {
				totalHeight += tocLinks[i].getBoundingClientRect().height;
			}

			const activeElementHeight = targetElement.getBoundingClientRect().height;

			markerTopStyle = totalHeight + "px";
			const isLastItem = targetIndex === tocLinks.length - 1;
			markerHeightStyle = activeElementHeight - (isLastItem ? 0 : 8) + "px";
		});
	});

	function isActive(item: TocItem) {
		return (
			(item.url === urlHash && `#${activeId}` === urlHash) ||
			isParentOfActiveItem(item) ||
			item.url === `#${activeId}`
		);
	}

	function isParentOfActiveItem(item: TocItem) {
		return Boolean(item.items?.some((item) => item.url === `#${activeId}`));
	}

	function isLastItem(item: TocItem) {
		return `#${itemIds[itemIds.length - 1]}` === item.url;
	}

	$effect(() => {
		const hash = urlHash;
		untrack(() => {
			if (hash === `#${activeId}`) return;
			activeId = hash.split("#")[1];
		});
	});

	$effect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						untrack(() => (activeId = entry.target.id));
						activeId = entry.target.id;
					}
				}
			},
			{ rootMargin: "0% 0% -80% 0% " }
		);

		for (const id of itemIds) {
			const node = document.getElementById(id);
			if (node) observer.observe(node);
		}

		return () => {
			for (const id of itemIds) {
				const node = document.getElementById(id);
				if (node) observer.unobserve(node);
			}
		};
	});

	$effect(() => {
		if (isAtBottom.current) {
			untrack(() => {
				activeId = itemIds[itemIds.length - 1];
			});
		}
	});

	return {
		get activeId() {
			return activeId;
		},
		get markerTopStyle() {
			return markerTopStyle;
		},
		get markerHeightStyle() {
			return markerHeightStyle;
		},
		isActive,
		isLastItem,
	};
}

export type TocState = ReturnType<typeof useToc>;

function useIsAtBottom() {
	let isAtBottom = $state(false);

	function checkScrollPos() {
		const buffer = 20;
		untrack(() => {
			isAtBottom =
				window.innerHeight + window.scrollY >=
				document.documentElement.scrollHeight - buffer;
		});
	}

	$effect(() => {
		const unsub = addEventListener(window, "scroll", checkScrollPos);

		return () => {
			unsub();
		};
	});

	return {
		get current() {
			return isAtBottom;
		},
	};
}
