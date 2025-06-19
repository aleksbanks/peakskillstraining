<script lang="ts">
	import { scale } from 'svelte/transition';
	let { label, active = false } = $props<{
		label: string;
		active?: boolean;
	}>();
</script>

<button role="tab" aria-selected={active} class={active ? 'primary' : 'secondary'} on:click>
	{#if active}
		<span in:scale={{ duration: 200 }}>{label}</span>
	{:else}
		{label}
	{/if}
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

	span {
		display: inline-block;
	}
</style>
