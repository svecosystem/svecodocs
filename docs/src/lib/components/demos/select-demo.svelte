<script lang="ts">
	import { Select } from "@svecodocs/kit";

	const items = [
		{
			label: "Apple",
			value: "apple",
		},
		{
			label: "Banana",
			value: "banana",
		},
		{
			label: "Orange",
			value: "orange",
		},
	];

	let value = $state("");

	const selectedLabel = $derived(
		items.find((item) => item.value === value)?.label ?? "Select an item"
	);
</script>

<Select.Root type="single" {items} bind:value>
	<Select.Trigger class="w-[240px]">
		{selectedLabel}
	</Select.Trigger>
	<Select.Content>
		{#each items as item}
			<Select.Item label={item.label} value={item.value}>
				{item.label}
			</Select.Item>
		{/each}
	</Select.Content>
</Select.Root>
