<script lang="ts">
	import IconWithNumber from '$lib/components/Helpers/IconWithNumber.svelte';
	export let title: string;
	export let description: string;
	export let number: string;
	export let width: number | undefined = 100;
	export let buttonText: string | undefined = undefined;
	export let buttonLink: string | undefined = undefined;
	export let secondaryButtonText: string | undefined = undefined;
	export let secondaryButtonLink: string | undefined = undefined;
</script>

<article class="card" style="width: {width}%">
	<IconWithNumber {number} />
	<h3 id="group-title-{number}">{title}</h3>
	<p>{description}</p>
	{#if (buttonText && buttonLink) || (secondaryButtonText && secondaryButtonLink)}
		<div class="button-container">
			{#if buttonText && buttonLink}
				<a target="_blank" href={buttonLink}>
					<button class="primary">{buttonText}</button>
				</a>
			{/if}
			{#if secondaryButtonText && secondaryButtonLink}
				<a target="_blank" href={secondaryButtonLink}>
					<button class="secondary">{secondaryButtonText}</button>
				</a>
			{/if}
		</div>
	{/if}
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
		width: 100%;
		max-width: 400px;
	}

	.card:hover,
	.card:focus {
		transform: scale(1.03);
		box-shadow: 0 0 0 2px var(--color-accent);
	}

	.button-container {
		display: flex;
		gap: var(--spacing-md);
		margin-top: auto;
	}

	h3 {
		font-weight: var(--font-weight-bold);
	}

	@media (max-width: 900px) {
		.card {
			max-width: 95vw;
			padding: var(--spacing-lg);
		}
	}
	@media (max-width: 600px) {
		.card {
			width: 100%;
			max-width: 100%;
			margin-bottom: 1rem;
			padding: 1.25rem 1rem;
			border-radius: 1.25rem;
			box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
		}
		h3 {
			font-size: 1.1rem;
		}
		p {
			font-size: 0.98rem;
		}
	}
</style>
