<script lang="ts">
	let { label, active = false } = $props<{
		label: string;
		active?: boolean;
	}>();
</script>

<button role="tab" aria-selected={active} class={active ? 'primary' : 'secondary'} on:click>
	{label}
</button>

<style>
	button {
		flex: 1;
		padding: var(--spacing-md) var(--spacing-lg);
		font-size: var(--font-size-md);
		font-weight: var(--font-weight-medium);
		cursor: pointer;
		transition: all 0.4s ease-in-out;
	}
</style>
