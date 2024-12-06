import { spawn } from "node:child_process";
import puppeteer from "puppeteer";
import { docs } from "../.velite/index.js";
import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";

/**
 * Ensures all directories in a path exist before writing a file
 * @param filePath - Full path where the file will be written
 * @throws {Error} If directory creation fails
 */
export async function ensureDirectoryExists(filePath) {
	const directory = dirname(filePath);
	await mkdir(directory, { recursive: true });
}

// Example usage with your screenshot code:
async function saveScreenshot(page, doc) {
	const filePath = `./static/images/og/${doc.slug}.png`;

	await ensureDirectoryExists(filePath);

	await page.screenshot({
		path: filePath,
		clip: {
			x: 0,
			y: 0,
			width: 1200,
			height: 630,
		},
	});
}
async function startDevServer() {
	const server = spawn("pnpm", ["dev"], {
		stdio: ["ignore", "pipe", "inherit"],
		// Remove process group creation to prevent killing parent
		detached: false,
	});

	return new Promise((resolve, reject) => {
		server.stdout.on("data", (data) => {
			const output = data.toString();
			if (output.includes("Local:")) {
				resolve(server);
			}
		});

		server.on("error", reject);

		setTimeout(() => {
			reject(new Error("Dev server failed to start within timeout"));
		}, 30000);
	});
}

async function build() {
	let server;
	try {
		console.log("Starting dev server for OG image generation...");
		server = await startDevServer();
		console.log("Server started, waiting for warm-up...");
		await new Promise((resolve) => setTimeout(resolve, 3000));
		console.log("Generating OG images...");
		await generateOGImages(docs);
		console.log("OG images generated, starting production build...");
	} catch (error) {
		console.error("Build failed:", error);
		process.exit(1);
	} finally {
		if (server) {
			// Properly terminate only the dev server process
			server.kill();
			// Wait for the process to fully terminate
			await new Promise((resolve) => {
				server.on("close", resolve);
			});
		}
	}
}

async function generateOGImages(docs) {
	try {
		const browser = await puppeteer.launch({
			defaultViewport: {
				width: 1440,
				height: 900,
				deviceScaleFactor: 2,
			},
		});

		console.log("☀️ Generating OG images...");
		for (const doc of docs) {
			const pageUrl = `http://localhost:5173/api/og?title=${doc.title}&description=${
				doc.description
			}`;
			console.log(`- ${doc.title}`);

			const page = await browser.newPage();
			await page.goto(pageUrl, {
				waitUntil: "networkidle2",
			});

			await saveScreenshot(page, doc);
		}

		await browser.close();
		console.log("✅ Done!");
	} catch (error) {
		console.error(error);
		throw error;
	}
}

build().catch((error) => {
	console.error("Unexpected error:", error);
	process.exit(1);
});
