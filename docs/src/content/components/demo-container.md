---
title: DemoContainer
description: Display a container with a border and a background color for examples/demos.
section: Components
---

<script>
	import { DemoContainer, Button } from "@svecodocs/kit";
</script>

Often times you'll want to display some demo/example components in a container. The `DemoContainer` component is a great way to do this, as it aligns effortlessly with the rest of the docs theme.

## Usage

```svelte title="document.md"
<script>
	import { DemoContainer, Button } from "@svecodocs/ui";
</script>

<DemoContainer class="flex flex-wrap gap-4">
	<Button variant="default">Default</Button>
	<Button variant="brand">Brand</Button>
	<Button variant="outline">Outline</Button>
	<Button variant="ghost">Ghost</Button>
	<Button variant="subtle">Subtle</Button>
	<Button variant="link">Link</Button>
</DemoContainer>
```

## Example

<DemoContainer class="gap-4 flex flex-wrap">
	<Button variant="default">Default</Button>
	<Button variant="brand">Brand</Button>
	<Button variant="outline">Outline</Button>
	<Button variant="ghost">Ghost</Button>
	<Button variant="subtle">Subtle</Button>
	<Button variant="link">Link</Button>
</DemoContainer>
