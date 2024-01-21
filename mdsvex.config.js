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
	remarkPlugins: [
		// use remark-gfm to support GitHub Flavored Markdown
		remarkGfm,
		// remove prettier-ignore comments from code blocks
		remarkRemovePrettierIgnore,
		// escape code blocks so they can be used within Svelte components
		remarkEscapeCode
	],
	rehypePlugins: [
		// convert <Component.Pre> to <pre> so it can be processed by rehype-pretty-code
		rehypeComponentPreToPre,
		// syntax highlight code blocks with rehype-pretty-code
		[rehypePrettyCode, prettyCodeOptions],
		// apply data-metadata to <figure> elements that contain a <figcaption>
		rehypeHandleMetadata,
		// render code blocks as HTML so they can be used within Svelte components
		rehypeRenderCode,
		// convert <pre> back to <Component.Pre> before rendering
		rehypePreToComponentPre,
		// add IDs to headings for table of contents links
		rehypeSlug
	]
};

// The entities we want to escape in code blocks, along with their replacements.
const entities = [
	[/</g, "&lt;"],
	[/>/g, "&gt;"],
	[/{/g, "&#123;"],
	[/}/g, "&#125;"]
];

/**
 * Removes `<!-- prettier-ignore -->` and `// prettier-ignore` from code blocks
 * before they are converted to HTML for syntax highlighting.
 *
 * We do this because sometimes we want to force a line break in code blocks, but
 * prettier removes them, however, we don't want to include the ignore statement
 * in the final code block.
 *
 * One caveat is that if you did want to include the ignore statement in the final
 * code block, you'd have to do some hacky stuff like including it in the comment
 * itself and checking for it in the code block, but that's not something we need
 * at the moment.
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

/**
 * Escapes code blocks so that they can be used within Svelte components.
 */
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

/**
 * Converts the `<Component.Pre>` component created by mdsvex to a regular `<pre>`
 * element so it can be processed by `rehype-pretty-code` or any other rehype plugin
 * that expects a `<pre>` element.
 */
function rehypeComponentPreToPre() {
	return async (tree) => {
		visit(tree, (node) => {
			if (node?.type === "element" && node?.tagName === "Components.pre") {
				node.tagName = "pre";
			}
		});
	};
}

/**
 * Converts `<pre>` elements back to `<Component.Pre>` before they are rendered.
 */
function rehypePreToComponentPre() {
	return async (tree) => {
		visit(tree, (node) => {
			if (node?.type === "element" && node?.tagName === "pre") {
				node.tagName = "Components.pre";
			}
		});
	};
}

/**
 * Adds `data-metadata` to `<figure>` elements that contain a `<figcaption>`.
 * We use this to style elements within the `<figure>` differently if a `<figcaption>`
 * is present.
 */
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

/**
 * Renders `<pre>` elements as HTML so they can be used within Svelte components.
 */
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

/**
 * Converts tabs to spaces to make wider code blocks fit better
 * on smaller screens.
 */
function tabsToSpaces(code) {
	return code.replaceAll("    ", "  ").replaceAll("\t", "  ");
}
