import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from "node:path";

const __dirname = new URL(".", import.meta.url).pathname;

export default defineConfig({
	plugins: [tailwindcss(), sveltekit()],
	optimizeDeps: {
		exclude: ["@svecodocs/kit"],
	},
	server: {
		fs: {
			allow: [resolve(__dirname, "./.velite")],
		},
	},
});
