---
title: Steps
description: Display a series of series of steps.
section: Components
---

<script>
import { Step, Steps, Callout } from "@svecodocs/kit";
</script>

The `Steps` and `Step` components are used to display a series of steps, breaking down a process into more manageable chunks.

## Usage

```svelte title="document.md"
<script>
	import { Steps, Step } from "$lib/components";
</script>

<Steps>
	<Step>Install the package</Step>

	You can install the project via `npm` or `pnpm`.

	<!-- Code block here -->

	<Step>Start your engines</Step>

	You can start the project by running `npm run dev` or `pnpm run dev`.

	<!-- Code block here -->
</Steps>
```

## Example

<Steps>

<Step>Install the package</Step>

You can install the project via `npm` or `pnpm`.

```bash
npm install @svecodocs/ui
```

<Step>Start your engines</Step>

You can start the project by running `npm run dev` or `pnpm dev`.

```bash
npm run dev
```

</Steps>

<Callout type="note">
	If you plan to use markdown-specific syntax in your steps, ensure you include a space between the component and the content in your Markdown file.
</Callout>
