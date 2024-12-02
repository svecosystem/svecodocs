---
title: Card Grid
description: Display a grid of cards.
section: Components
---

<script>
	import { CardGrid, Card } from "@svecodocs/kit";
	import RocketLaunch from "phosphor-svelte/lib/RocketLaunch";
	import Blueprint from "phosphor-svelte/lib/Blueprint";
	import Binary from "phosphor-svelte/lib/Binary";
	import CloudCheck from "phosphor-svelte/lib/CloudCheck";
</script>

Use the `CardGrid` component to display a grid of [`Card`](/docs/components/card) components.

## Usage

```svelte title="document.md"
<script>
	import { CardGrid, Card } from "@svecodocs/ui";
</script>

<CardGrid cols={2}>
	<Card title="This is a card">
		You can use markdown in here, just ensure to include a space between the component and the
		content in your Markdown file.
	</Card>
	<Card title="This is another card">
		You can use markdown in here, just ensure to include a space between the component and the
		content in your Markdown file.
	</Card>
	<Card title="This is a third card">
		You can use markdown in here, just ensure to include a space between the component and the
		content in your Markdown file.
	</Card>
	<Card title="This is a fourth card" href="/docs">
		You can use markdown in here, just ensure to include a space between the component and the
		content in your Markdown file.
	</Card>
</CardGrid>
```

## Examples

### 2 Columns (default)

```svelte
<CardGrid>
	<!-- ... cards here-->
</CardGrid>
```

<CardGrid>
	<Card title="This is a card" icon={Binary}>
		You can use markdown in here, just ensure to include a space between the component and the
		content in your Markdown file.
	</Card>
	<Card title="This is another card" icon={Blueprint}>
		You can use markdown in here, just ensure to include a space between the component and the
		content in your Markdown file.
	</Card>
	<Card title="This is a third card" icon={RocketLaunch}>
		You can use markdown in here, just ensure to include a space between the component and the
		content in your Markdown file.
	</Card>
	<Card title="This is a fourth card" href="/docs" icon={CloudCheck}>
		You can use markdown in here, just ensure to include a space between the component and the
		content in your Markdown file.
	</Card>
</CardGrid>

### 3 Columns

```svelte
<CardGrid cols={3}>
	<!-- ... cards here-->
</CardGrid>
```

<CardGrid cols={3}>
	<Card title="This is a card" icon={Binary}>
		You can use markdown in here, just ensure to include a space between the component and the
		content in your Markdown file.
	</Card>
	<Card title="This is another card" icon={Blueprint}>
		You can use markdown in here, just ensure to include a space between the component and the
		content in your Markdown file.
	</Card>
	<Card title="This is a third card" href="/docs" icon={CloudCheck}>
		You can use markdown in here, just ensure to include a space between the component and the
		content in your Markdown file.
	</Card>
</CardGrid>
