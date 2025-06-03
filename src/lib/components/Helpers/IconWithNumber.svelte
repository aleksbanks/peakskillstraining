<script lang="ts">
	export let number: string;
</script>

<div class="icon-with-number">
	<span class="icon-number">{number}</span>
</div>

<style>
	.icon-with-number {
		border-radius: var(--radius-md);
		border: 2px solid var(--color-accent);
		padding: var(--spacing-sm) var(--spacing-md);
		width: fit-content;
	}
</style>
