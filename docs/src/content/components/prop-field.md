---
title: PropField
description: Display a prop field with a name, type, and description.
section: Components
---

<script>
	import { PropField, Collapsible } from "@svecodocs/kit";
</script>

Use the `PropField` component to annotate props/params in your documentation.

## Usage

```svelte title="document.md"
<script>
	import { PropField } from "@svecodocs/kit";
</script>

<PropField name="checked" type="boolean" required defaultValue="false">
	<!-- Space here-->
	The checked state of the checkbox.
	<!-- Space here-->
</PropField>
```

## Examples

### Basic

<PropField name="checked" type="boolean" defaultValue="false" required>
The checked state of the checkbox.
</PropField>

### Object

You can use `PropField` in combination with the [`Collapsible`](/docs/components/collapsible) component to represent more complex types.

```svelte title="document.md"
<script>
	import { PropField, Collapsible } from "@svecodocs/kit";
</script>

<PropField name="options" type="CheckboxOptions" required>
	<!-- Space here -->
	Configuration options to customize the behavior of the `Checkbox` component.
	<!-- Space here -->
	<Collapsible title="properties">
		<PropField name="width" type="number" required>
			The width to apply to the checkbox.
		</PropField>
		<PropField name="height" type="number" required defaultValue="20">
			The height to apply to the checkbox.
		</PropField>
	</Collapsible>
</PropField>
```

<PropField name="options" type="CheckboxOptions" required>

Configuration options to customize the behavior of the `Checkbox` component.

<Collapsible title="properties">
	<PropField name="width" type="number" required>
	The width to apply to the checkbox.
	</PropField>
	<PropField name="height" type="number" required defaultValue="20">
	The height to apply to the checkbox.
	</PropField>
</Collapsible>
</PropField>
