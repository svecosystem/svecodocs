---
title: NativeSelect
description: A styled native select component to use in examples and documentation.
section: Components
---

<script>
	import { NativeSelect, Label, DemoContainer } from "@svecodocs/kit";
</script>

The `NativeSelect` component is a styled native select component that you can use in your examples and documentation.

## Usage

```svelte title="document.md"
<script>
	import { NativeSelect } from "@svecodocs/kit";
</script>

<NativeSelect>
	<option value="1">Option 1</option>
	<option value="2">Option 2</option>
	<option value="3">Option 3</option>
</NativeSelect>
```

## Example

<DemoContainer class="w-full justify-center flex">
	<div class="flex flex-col max-w-xs gap-5 w-full">
	<Label for="options">Select an option</Label>
	<NativeSelect class="max-w-sm">
		<option value="1">Option 1</option>
		<option value="2">Option 2</option>
		<option value="3">Option 3</option>
	</NativeSelect>
	</div>
</DemoContainer>
