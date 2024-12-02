---
title: Textarea
description: A textarea component to use in examples and documentation.
section: Components
---

<script>
	import { Textarea, Label, DemoContainer, Button } from "@svecodocs/kit";
</script>

When building documentation, it's often necessary to provide users with a textarea to showcase a specific feature. The `Textarea` component is a great way to do this, as it aligns effortlessly with the rest of the docs theme. The `Label` component is also provided to help with accessibility.

## Usage

```svelte
<script>
	import { Textarea, Label } from "@svecodocs/kit";
</script>

<Label for="bio">Your bio</Label>
<Textarea id="bio" name="bio" />
```

## Example

<DemoContainer>
	<div class="max-w-sm mx-auto w-full flex flex-col gap-5">
		<div class="flex flex-col gap-4">
			<Label for="bio">Bio</Label>
			<Textarea id="bio" name="bio" placeholder="Tell us about yourself" />
		</div>
		<div class="ml-auto mt-3">
			<Button>Update Profile</Button>
		</div>
	</div>
</DemoContainer>
