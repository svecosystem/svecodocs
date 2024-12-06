import { spawn } from "node:child_process";
import puppeteer from "puppeteer";
import { docs } from "../.velite/index.js";
import { mkdir, unlink, stat } from "node:fs/promises";
import { dirname } from "node:path";
import sharp from "sharp";

async function ensureDirectoryExists(filePath) {
	const directory = dirname(filePath);
	await mkdir(directory, { recursive: true });
}

async function logCompressionStats(tempPath, finalPath) {
	const originalSize = (await stat(tempPath)).size;
	const compressedSize = (await stat(finalPath)).size;
	const savingsPercent = (((originalSize - compressedSize) / originalSize) * 100).toFixed(1);

	console.log(
		`  Compressed: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(compressedSize / 1024 / 1024).toFixed(2)}MB (${savingsPercent}% reduction)`
	);
}

async function saveAndCompressScreenshot(page, doc) {
	const tempPath = `./static/images/og/tmp/${doc.slug}.png`;
	const finalPath = `./static/images/og/${doc.slug}.webp`;
	await ensureDirectoryExists(tempPath);
	await ensureDirectoryExists(finalPath);

	await page.screenshot({
		path: tempPath,
		clip: {
			x: 0,
			y: 0,
			width: 1200,
			height: 630,
		},
	});

	await sharp(tempPath)
		.webp({
			quality: 80,
			compressionLevel: 9,
			palette: true,
		})
		.toFile(finalPath);

	await logCompressionStats(tempPath, finalPath);

	await unlink(tempPath);
}
async function startDevServer() {
	const server = spawn("pnpm", ["dev"], {
		stdio: ["ignore", "pipe", "inherit"],
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
		await generateOGImages(docs);
		console.log("OG images generated, starting production build...");
	} catch (error) {
		console.error("Build failed:", error);
		process.exit(1);
	} finally {
		if (server) {
			server.kill();
			await new Promise((resolve) => {
				server.on("close", resolve);
			});
		}
	}
}

async function generateSingleOGImage(doc) {
	const browser = await puppeteer.launch({
		defaultViewport: {
			width: 1440,
			height: 900,
			deviceScaleFactor: 2,
		},
	});

	try {
		const page = await browser.newPage();
		const pageUrl = `http://localhost:5173/api/og?title=${doc.title}&description=${
			doc.description
		}`;

		await page.goto(pageUrl, { waitUntil: "networkidle2" });
		await saveAndCompressScreenshot(page, doc);
		console.log(`✓ Generated: ${doc.title}`);
	} finally {
		await browser.close();
	}
}
async function generateOGImages(docs) {
	console.log("☀️ Starting parallel OG image generation...");
	const startTime = Date.now();

	try {
		await Promise.all(docs.map(generateSingleOGImage));

		const endTime = Date.now();
		console.log(`✅ All images generated in ${(endTime - startTime) / 1000}s!`);
	} catch (error) {
		console.error("Failed to generate OG images:", error);
		throw error;
	}
}

build().catch((error) => {
	console.error("Unexpected error:", error);
	process.exit(1);
});
