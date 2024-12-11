---
title: Select
description: A select component to use in examples and documentation.
section: Components
---

<script>
	import { Select, DemoContainer } from "@svecodocs/kit";
	import SelectDemo from "$lib/components/demos/select-demo.svelte";
</script>

## Usage

```svelte title="document.md"
<script>
	import { Select } from "@svecodocs/kit";
</script>

<Select>
	<!-- ... -->
</Select>
```

## Example

<DemoContainer class="flex items-center gap-2.5 flex-wrap">
	<SelectDemo />
</DemoContainer>

## Props

See [Bits UI Select](https://bits-ui.com/docs/components/select) for available props.
