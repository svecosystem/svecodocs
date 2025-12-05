---
title: Site Config
description: Learn how to customize the site config in your Svecodocs project.
section: Configuration
---

<script>
	import { PropField, Collapsible, Callout } from "@svecodocs/kit";
</script>

The site config is used to **configure site-wide settings**, such as the `title`, `description`, `keywords`, `ogImage`, `copyright` and other metadata.

<Callout type="tip" title="Note">

The site config is defined in the `src/lib/site-config.ts` file and used in `src/routes/+layout.svelte` of your Svecodocs start project.

</Callout>

## Usage

### Define Config

To define your site config, use the `defineSiteConfig` helper from `@svecodocs/kit`.

```ts title="src/lib/site-config.ts" showLineNumbers
import { defineSiteConfig } from "@svecodocs/kit";

export const siteConfig = defineSiteConfig({
	name: "Svecodocs",
	url: "https://docs.sveco.dev",
	ogImage: {
		url: "https://docs.sveco.dev/og.png",
		height: "630",
		width: "1200",
	},
	description: "Documentation toolkit for Svecosystem Projects.",
	author: "Huntabyte",
	keywords: ["svecosystem", "sveltekit", "documentation", "docs"],
	license: {
		name: "MIT",
		url: "https://github.com/svecosystem/svecodocs/blob/main/LICENSE",
	},
	links: {
		x: "https://x.com/huntabyte",
		github: "https://github.com/svecosystem/svecodocs",
	},
	footer: {
		copyright: {
			url: "https://github.com/svecosystem",
			year: new Date().getFullYear(),
			name: "Svecosystem",
		},
	},
});
```

### Initialize the Site Config

To initialize the site config, import the `site-config.ts` in your `root layout` and use the `useSiteConfig` function from `@svecodocs/kit`.

```svelte title="src/routes/+layout.svelte" showLineNumbers
<script lang="ts">
    import { siteConfig } from "$lib/site-config";
    import { useSiteConfig } from "@svecodocs/kit";
        
    useSiteConfig(() => siteConfig);
</script>
```



## Config Properties

<PropField name="name" type="string" required>
The name of your site.
</PropField>

<PropField name="url" type="string" required>
The URL of your site.
</PropField>

<PropField name="description" type="string" required>
A description of your site.
</PropField>

<PropField name="author" type="string">
The author of the site.
</PropField>

<PropField name="keywords" type="string[]">
A list of keywords for your site.
</PropField>

<PropField name="links" type="object">
	A config containing links to your social media profiles.
	<Collapsible title="properties">
		<PropField name="x" type="string">
			A link to your X (formerly Twitter) profile.
		</PropField>
		<PropField name="github" type="string">
            A link to your GitHub profile.
        </PropField>
	</Collapsible>
</PropField>

<PropField name="ogImage" type="object">

A config containing the **Open Graph image** details for your site. This image is used when sharing links on social media (X, Facebook, etc.).	
    
<Collapsible title="properties">
    <PropField name="url" type="string" required>
        The URL of the image.
    </PropField>
    <PropField name="width" type="string" required>
        The width of the image.
    </PropField>
    <PropField name="height" type="string" required>
        The height of the image.
    </PropField>
</Collapsible>
</PropField>

<PropField name="license" type="object">
	An config containing the license details for your site.
	<Collapsible title="properties">
		<PropField name="name" type="string" required>
			The name of the license.
		</PropField>
		<PropField name="url" type="string" required>
			A link to the license.
		</PropField>
	</Collapsible>
</PropField>

<PropField name="footer" type="object">
	A config containing footer configuration.
	<Collapsible title="properties">
		<PropField name="copyright" type="object">
			A config containing copyright information.
			<Collapsible title="properties">
				<PropField name="name" type="string">
					The name of the copyright holder (e.g., "Svecosystem").
				</PropField>
				<PropField name="url" type="string">
					A link to the copyright holder's site.
				</PropField>
				<PropField name="year" type="number">
                    The year of the copyright (e.g., `2025`).
				</PropField>
			</Collapsible>
		</PropField>
	</Collapsible>
</PropField>
