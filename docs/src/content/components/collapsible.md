---
title: Collapsible
description: Show and hide content in a collapsible container.
section: Components
---

<script>
	import { Collapsible, DemoContainer, PropField } from "@svecodocs/kit";
</script>

## Usage

```svelte title="document.md"
<script>
	import { Collapsible, DemoContainer } from "@svecodocs/kit";
</script>

<Collapsible title="more info">
	<!-- space here so MD can render -->
	To learn more about SvelteKit, check out the [SvelteKit documentation](https://svelte.dev/kit).
	<!-- space here so MD can render -->
</Collapsible>
```

## Example

<Collapsible title="more info" class="mt-6">

To learn more about SvelteKit, check out the [SvelteKit documentation](https://svelte.dev/kit).

</Collapsible>

## Props

<PropField name="title" type="string">
The title to display in the trigger. "Hide" and "Show" prefix will be added automatically.
</PropField>

<PropField name="open" type="boolean" defaultValue="false">
Whether the content should be open or closed.
</PropField>

<PropField name="triggerContent" type="Snippet">
Override the content inside of the trigger button.
</PropField>

<PropField name="children" type="Snippet">
The content that is collapsible.
</PropField>
