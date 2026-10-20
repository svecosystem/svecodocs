import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";
import devToolsJson from "vite-plugin-devtools-json";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsx } from "mdsx";
import adapter from "@sveltejs/adapter-cloudflare";
import mdsxConfig from "./mdsx.config.js";

const __dirname = new URL(".", import.meta.url).pathname;

export default defineConfig({
	plugins: [
		tailwindcss(),
		sveltekit({
			preprocess: [mdsx(mdsxConfig), vitePreprocess()],
			extensions: [".svelte", ".md"],
			adapter: adapter(),
		}),
		devToolsJson(),
	],
	optimizeDeps: {
		exclude: ["@svecodocs/kit"],
	},
	ssr: {
		noExternal: ["@svecodocs/kit"],
	},
	server: {
		fs: {
			allow: [resolve(__dirname, "./.velite")],
		},
	},
});
