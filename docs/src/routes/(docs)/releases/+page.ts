import { getReleases } from "@svecodocs/kit";

export const prerender = true;

export async function load() {
	const releases = await getReleases("svecosystem", "svecodocs");
	return {
		releases,
	};
}
