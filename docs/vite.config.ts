import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";
import devToolsJson from "vite-plugin-devtools-json";

const __dirname = new URL(".", import.meta.url).pathname;

export default defineConfig({
	plugins: [tailwindcss(), sveltekit(), devToolsJson()],
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
