---
title: Tabs
description: Break content into multiple panes to reduce cognitive load.
section: Components
---

<script>
	import { Tabs, TabItem, Callout, PropField } from "@svecodocs/kit";
</script>

You can use the `Tabs` and `TabItem` components to create tabbed interfaces. A `label` prop must be provided to each `TabItem` which will be used to display the label. Whichever tab should be active by default is specified by the `value` prop on the `Tabs` component.

## Usage

```svelte title="document.md"
<script>
	import { Tabs, TabItem } from "@svecodocs/kit";
</script>

<Tabs value="First tab">
	<TabItem label="First tab">This is the first tab's content.</TabItem>
	<TabItem label="Second tab">This is the second tab's content.</TabItem>
</Tabs>
```

## Examples

### Simple Text

<Tabs value="First tab">
<TabItem label="First tab">This is the first tab's content.</TabItem>
<TabItem label="Second tab">This is the second tab's content.</TabItem>
</Tabs>

### Markdown Syntax

<Tabs value="+page.svelte">
<TabItem label="+page.svelte">

```svelte
<script lang="ts">
	import { Button } from "@svecodocs/kit";
</script>

<Button onclick={() => alert("Hello!")}>Click me</Button>
```

</TabItem>

<TabItem label="+page.server.ts">

```ts
export async function load() {
	return {
		transactions: [],
	};
}
```

</TabItem>
</Tabs>

<Callout type="note" class="mt-8">
	If you plan to use markdown-specific syntax in your tabs, ensure you include a space between the component and the content in your Markdown file.
</Callout>

## Props

### Tabs

<PropField name="value" type="string" required>
The label of the tab to be active by default.
</PropField>

### TabItem

<PropField name="label" type="string" required>
The label to display for the tab.
</PropField>
