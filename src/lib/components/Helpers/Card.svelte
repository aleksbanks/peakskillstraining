<script lang="ts">
	import IconWithNumber from '$lib/components/Helpers/IconWithNumber.svelte';
	export let title: string;
	export let description: string;
	export let number: string;
	export let width: number;
</script>

<article class="card" style="width: {width}%;">
	<IconWithNumber {number} />
	<h3 id="group-title-{number}">{title}</h3>
	<p>{description}</p>
</article>

<style>
	.card {
		background-color: var(--color-secondary);
		padding: var(--spacing-xl);
		border-radius: var(--radius-md);
		opacity: 0.9;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		transition:
			transform 0.3s ease-in-out,
			box-shadow 0.3s ease-in-out;
		outline: none;
	}

	.card:hover,
	.card:focus {
		transform: scale(1.03);
		box-shadow: 0 0 0 2px var(--color-accent);
	}

	h3 {
		font-weight: var(--font-weight-bold);
	}
	@media (max-width: 900px) {
		.card {
			width: 45%;
		}
	}
	@media (max-width: 600px) {
		.card {
			width: 100%;
		}
	}
</style>
