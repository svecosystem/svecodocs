---
title: PropField
description: Display a prop field with a name, type, and description.
section: Components
---

<script>
	import { PropField } from "@svecodocs/kit";
</script>

Work in progress.

## API Reference

### Props

<PropField name="checked" type="boolean" defaultValue="false">
The checked state of the checkbox.
</PropField>

<PropField name="onCheckedChange" type="(checked: boolean) => void">
The name of the prop.
</PropField>

<PropField name="name" type="string" required>
The name used to submit the checkbox as a form field.
</PropField>
