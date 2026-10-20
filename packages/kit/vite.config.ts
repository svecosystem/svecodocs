import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
	plugins: [sveltekit({ preprocess: vitePreprocess() }), tailwindcss()],
});
