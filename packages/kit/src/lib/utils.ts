import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import removeMd from "remove-markdown";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function cleanMarkdown(raw: string) {
	return removeMd(raw, {
		replaceLinksWithURL: true,
		gfm: true,
		useImgAltText: true,
	})
		.replaceAll("\n", " ")
		.replaceAll("\t", " ");
}
