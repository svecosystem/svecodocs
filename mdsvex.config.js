import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import { fileURLToPath } from "url";
import { toHtml } from "hast-util-to-html";
import { visit } from "unist-util-visit";
import { escapeSvelte } from "@huntabyte/mdsvex";
import { resolve } from "path";
import { readFileSync } from "fs";
import { getHighlighter } from "shikiji";
import rehypeSlug from "rehype-slug";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

/**
 * @type {import('rehype-pretty-code').Options}
 */
const prettyCodeOptions = {
	theme: {
		dark: JSON.parse(
			readFileSync(resolve(__dirname, "./src/lib/styles/themes/tokyo-night-storm.json"))
		),
		light: JSON.parse(
			readFileSync(resolve(__dirname, "./src/lib/styles/themes/tokyo-night-light.json"))
		)
	},
	getHighlighter: (options) =>
		getHighlighter({
			...options,
			langs: [
				"plaintext",
				import("shikiji/langs/javascript.mjs"),
				import("shikiji/langs/typescript.mjs"),
				import("shikiji/langs/css.mjs"),
				import("shikiji/langs/svelte.mjs"),
				import("shikiji/langs/shellscript.mjs"),
				import("shikiji/langs/markdown.mjs")
			]
		}),
	keepBackground: false,
	onVisitLine(node) {
		if (node.children.length === 0) {
			node.children = { type: "text", value: " " };
		}
	},
	onVisitHighlightedLine(node) {
		node.properties.className = ["line--highlighted"];
	},
	onVisitHighlightedWord(node) {
		node.properties.className = ["word--highlighted"];
	}
};

/** @type {import('@huntabyte/mdsvex').MdsvexOptions} */
export const mdsvexOptions = {
	extensions: [".md"],
	layout: resolve(__dirname, "./src/lib/components/markdown/layout.svelte"),
	smartypants: {
		quotes: false,
		ellipses: false,
		backticks: false,
		dashes: false
	},
	remarkPlugins: [remarkGfm, remarkRemovePrettierIgnore, remarkEscapeCode],
	rehypePlugins: [
		rehypeComponentPreToPre,
		[rehypePrettyCode, prettyCodeOptions],
		rehypeHandleMetadata,
		rehypeRenderCode,
		rehypePreToComponentPre,
		rehypeSlug
	]
};

const entities = [
	[/</g, "&lt;"],
	[/>/g, "&gt;"],
	[/{/g, "&#123;"],
	[/}/g, "&#125;"]
];

/**
 * Removes `<!-- prettier-ignore -->` and `// prettier-ignore` from code blocks.
 * We do this because sometimes we want to force a line break in code blocks, but
 * prettier removes them, however, we don't want to include the ignore statement
 * in the final code block.
 */
function remarkRemovePrettierIgnore() {
	return async (tree) => {
		visit(tree, "code", (node) => {
			node.value = node.value
				.replaceAll("<!-- prettier-ignore -->\n", "")
				.replaceAll("// prettier-ignore\n", "");
		});
	};
}

function remarkEscapeCode() {
	return async (tree) => {
		visit(tree, "inlineCode", escape);

		function escape(node) {
			for (let i = 0; i < entities.length; i += 1) {
				node.value = node.value.replace(entities[i][0], entities[i][1]);
			}
		}
	};
}

function rehypeComponentPreToPre() {
	return async (tree) => {
		visit(tree, (node) => {
			if (node?.type === "element" && node?.tagName === "Components.pre") {
				node.tagName = "pre";
			}
		});
	};
}

function rehypePreToComponentPre() {
	return async (tree) => {
		visit(tree, (node) => {
			if (node?.type === "element" && node?.tagName === "pre") {
				node.tagName = "Components.pre";
			}
		});
	};
}

function rehypeHandleMetadata() {
	return async (tree) => {
		visit(tree, (node) => {
			if (node?.type === "element" && node?.tagName === "figure") {
				if (!("data-rehype-pretty-code-figure" in node.properties)) {
					return;
				}

				const preElement = node.children.at(-1);
				if (preElement.tagName !== "pre") {
					return;
				}

				if (node.children.at(0).tagName === "figcaption") {
					node.properties["data-metadata"] = "";
					node.children.at(-1).properties["data-metadata"] = "";
				}
			}
		});
	};
}

function rehypeRenderCode() {
	return async (tree) => {
		visit(tree, (node) => {
			if (
				node?.type === "element" &&
				(node?.tagName === "Components.pre" || node?.tagName === "pre")
			) {
				/** @type HTMLElement */
				const codeEl = node.children[0];
				if (codeEl.tagName !== "code") {
					return;
				}

				const codeString = tabsToSpaces(
					toHtml(codeEl, {
						allowDangerousCharacters: true,
						allowDangerousHtml: true
					})
				);

				codeEl.type = "raw";

				codeEl.value = `{@html \`${escapeSvelte(codeString)}\`}`;
			}
		});
	};
}

function tabsToSpaces(code) {
	return code.replaceAll("    ", "  ").replaceAll("\t", "  ");
}
