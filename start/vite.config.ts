import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsx } from "mdsx";
import adapter from "@sveltejs/adapter-cloudflare";
import mdsxConfig from "./mdsx.config.js";

const __dirname = new URL(".", import.meta.url).pathname;

export default defineConfig({
	plugins: [
		sveltekit({
			preprocess: [mdsx(mdsxConfig), vitePreprocess()],
			extensions: [".svelte", ".md"],
			adapter: adapter(),
		}),
		tailwindcss(),
	],
	server: {
		fs: {
			allow: [resolve(__dirname, "./.velite")],
		},
	},
});
