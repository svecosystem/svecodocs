import type { Component } from "svelte";
import type {
	HTMLAnchorAttributes,
	HTMLAttributes,
	HTMLButtonAttributes,
	SVGAttributes,
} from "svelte/elements";

export type Primitive<T, U extends HTMLElement = HTMLElement> = T & {
	ref?: U | null;
};

export type PrimitiveAttributes<T extends HTMLElement = HTMLElement> = Primitive<HTMLAttributes<T>>;
export type PrimitiveDivAttributes = PrimitiveAttributes<HTMLDivElement>;
export type PrimitiveAnchorAttributes = Primitive<HTMLAnchorAttributes, HTMLAnchorElement>;
export type PrimitiveButtonAttributes = Primitive<HTMLButtonAttributes, HTMLButtonElement>;
export type PrimitiveHeadingAttributes = PrimitiveAttributes<HTMLHeadingElement>;
export type PrimitiveSVGAttributes = Primitive<SVGAttributes<SVGElement>>;

export type AnchorNavItem = {
	title: string;
	href: string;
	icon: Component;
	disabled?: boolean;
};

export type HeaderNavItem = {
	title: string;
	href: string;
};

export type SidebarNavSection = {
	title?: string;
	items: SidebarNavItem[];
};

export type SidebarNavItem = {
	title: string;
	href?: string;
	disabled?: boolean;
	external?: boolean;
	label?: string;
};

export type Navigation = {
	anchors?: AnchorNavItem[];
	header?: HeaderNavItem[];
	sections?: SidebarNavSection[];
	items?: SidebarNavItem[];
};

export type TOCEntry = {
	title: string;
	url: string;
	items?: TOCEntry[];
};

export type Contributor = {
	login: string;
	name?: string;
	avatar_url: string;
	contributions: number;
};
