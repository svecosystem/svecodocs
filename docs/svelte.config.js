import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsx } from "mdsx";
import mdsxConfig from "./mdsx.config.js";

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [mdsx(mdsxConfig), vitePreprocess()],
	kit: {
		alias: {
			"$content/*": ".velite/*",
		},
	},
	extensions: [".svelte", ".md"],
};

export default config;
