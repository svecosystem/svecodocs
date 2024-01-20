---
title: Components
description: Pre-built components to use within the docs.
tagline: Overview
---

<script>
	import { Tabs, TabItem, Callout } from '$lib/components'
</script>

The Svecosystem starter template ships with a few pre-built components that you can use within the docs. These components are built using [Svelte](https://svelte.dev) and [Tailwind CSS](https://tailwindcss.com).

## Using a component

To use a component, simply import it from the `$lib/components` directory and use it in the Markdown file.

```md title="content/docs/example.md"
---
title: Example
description: An example page.
---

<script>
	import { SomeComponent } from '$lib/components'
</script>

<SomeComponent>
	Hello
</SomeComponent>
```

## Built-in components

Here's a list of the built-in components you can start using right away.

### Tabs

You can use the `Tabs` and `TabItem` components to create a tabbed interface. Each `<TabItem>` must contain a `label` prop that will be used as the tab's label.

```svelte title="content/docs/example.md"
<script>
	import { Tabs, TabItem } from "$lib/components";
</script>

<Tabs>
	<TabItem label="First tab">This is the first tab's content.</TabItem>
	<TabItem label="Second tab">This is the second tab's content.</TabItem>
</Tabs>
```

The above code will render the following:

<Tabs>
	<TabItem label="First tab">This is the first tab's content.</TabItem>
	<TabItem label="Second tab">This is the second tab's content.</TabItem>
</Tabs>

### Callouts

Callouts (also known as "admonitions") are used to highlight a block of text.

There are four types of callouts available: `'note'`, `'warning'`, `'danger'`, and `'tip'`.

```svelte title="content/docs/example.md"
<script>
	import { Callout } from "$lib/components";
</script>

<Callout type="note" title="Note">
	This is a note, used to highlight important information or provide additional
	context. You can use markdown in here as well! Just ensure you include a space
	between the component and the content in your Markdown file.
</Callout>
```

The above code will render the following:

<Callout type="note" title="Note">

    This is a note, used to highlight important information or provide additional
    context. You can use Markdown in here as well! Just ensure you include a space between the component and the content in your Markdown file.

</Callout>

Here are the other types of callouts:

<Callout type="danger" title="Danger">

This is a danger callout.

</Callout>

<Callout type="tip" title="Tip">

This is a tip callout.

</Callout>

<Callout type="warning" title="Warning">

This is a warning callout.

</Callout>
