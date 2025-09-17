import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import removeMd from "remove-markdown";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function cleanMarkdown(rawMd: string) {
	return removeMd(rawMd, {
		replaceLinksWithURL: true,
		gfm: true,
		useImgAltText: true,
	})
		.replaceAll("\n", " ")
		.replaceAll("\t", " ")
		.trim();
}
