---
title: Card
description: Display a card with a title and optional icon.
section: Components
---

<script>
	import { Card, PropField } from "@svecodocs/kit";
	import RocketLaunch from "phosphor-svelte/lib/RocketLaunch";
</script>

You can use the `Card` component to display a card with a title and optional icon.

## Usage

### With Icon

Pass an icon component to the `icon` prop to display an icon in the card.

```svelte title="document.md"
<script>
	import { Card } from "@svecodocs/ui";
	import RocketLaunch from "phosphor-svelte/lib/RocketLaunch";
</script>

<Card title="A card with an icon" icon={RocketLaunch}>
	You can use markdown in here, just ensure to include a space between the component and the
	content in your Markdown file.
</Card>
```

### Link Card

Pass the `href` prop to convert the card into a link.

```svelte title="document.md"
<script>
	import { Card } from "@svecodocs/ui";
	import RocketLaunch from "phosphor-svelte/lib/RocketLaunch";
</script>

<Card title="A card with a link" href="/docs" icon={RocketLaunch}>
	You can use markdown in here, just ensure to include a space between the component and the
	content in your Markdown file.
</Card>
```

<Card title="A card with a link" href="/docs" icon={RocketLaunch}>
	You can use markdown in here, just ensure to include a space between the component and the content
	in your Markdown file.
</Card>

### Without Icon

If you don't want to use an icon, just don't pass the `icon` prop.

```svelte title="document.md"
<script>
	import { Card } from "@svecodocs/ui";
</script>

<Card title="A card without an icon">
	You can use markdown in here, just ensure to include a space between the component and the
	content in your Markdown file.
</Card>
```

<Card title="A card without an icon">
You can use markdown in here, just ensure to include a space between the component and the content in your Markdown file.
</Card>

### Horizontal

You can use the `horizontal` prop to display the card horizontally.

```svelte title="document.md"
<script>
	import { Card } from "@svecodocs/ui";
	import RocketLaunch from "phosphor-svelte/lib/RocketLaunch";
</script>

<Card title="A card horizontally" horizontal icon={RocketLaunch}>
	You can use markdown in here, just ensure to include a space between the component and the
	content in your Markdown file.
</Card>
```

<Card title="A horizontal card" horizontal icon={RocketLaunch}>
You can use markdown in here, just ensure to include a space between the component and the content in your Markdown file.
</Card>

## Props

<PropField name="title" type="string" required>
The title to display in the card.
</PropField>

<PropField name="icon" type="Component">
The icon to display in the card.
</PropField>

<PropField name="href" type="string">

If provided, the card will become a link. The `target` is handled automatically based on what the `href` starts with. External links will open in a new tab, and internal links will open in the current tab.

</PropField>

<PropField name="children" type="Snippet">
The body content of the card.
</PropField>
