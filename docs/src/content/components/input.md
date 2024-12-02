---
title: Input
description: A form input component to use in examples and documentation.
section: Components
---

<script>
	import { Input, Label, DemoContainer, Button } from "@svecodocs/kit";
</script>

When building documentation, it's often necessary to provide users with a form input to showcase a specific feature. The `Input` component is a great way to do this, as it aligns effortlessly with the rest of the docs theme. The `Label` component is also provided to help with accessibility.

## Usage

```svelte
<script>
	import { Input, Label } from "@svecodocs/kit";
</script>

<Label for="name">Your name</Label>
<Input id="name" name="name" placeholder="John Doe" />
```

## Example

<DemoContainer>
<div class="max-w-xs mx-auto w-full flex flex-col gap-5">
	<div class="flex flex-col gap-4">
		<Label for="fName">First name</Label>
		<Input id="fName" name="fName" placeholder="John" />
	</div>
	<div class="flex flex-col gap-4">
		<Label for="lName">Last name</Label>
		<Input id="lName" name="lName" placeholder="Doe" />
	</div>
	<div class="ml-auto">
		<Button>Update Profile</Button>
	</div>
</div>
</DemoContainer>
