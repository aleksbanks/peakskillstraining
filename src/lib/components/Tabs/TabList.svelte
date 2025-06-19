<!-- src/lib/components/Tabs/TabList.svelte -->
<script lang="ts">
	import Tab from './Tab.svelte';

	let { tabs, activeTab = $bindable(0) } = $props<{
		tabs: string[];
		activeTab?: number;
	}>();
</script>

<div class="tab-list" role="tablist">
	{#each tabs as tab, index}
		<Tab label={tab} active={index === activeTab} on:click={() => (activeTab = index)} />
	{/each}
</div>

<style>
	.tab-list {
		display: flex;
		gap: var(--spacing-sm);
		border-bottom: 1px solid var(--color-border);
		height: fit-content;
		padding: var(--spacing-md) 0;
	}
</style>
