import { getDoc } from "#lib/utils.js";

export async function load({ params }) {
	return getDoc(params.slug);
}
