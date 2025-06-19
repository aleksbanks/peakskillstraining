<script lang="ts">
	import type { PurchaseOption } from '$lib/types/gym';
	import TimeIcon from '$lib/components/Icons/TimeIcon.svelte';
	let { option, isLast } = $props<{
		option: PurchaseOption;
		isLast: boolean;
	}>();
</script>

<div class="card" class:popular={option.isPopular}>
	<h3>
		{#if option.isPopular}
			<span class="star">⭐</span>
		{/if}
		{option.title}
	</h3>
	<div class="time">
		<TimeIcon />
		<p>{option.days.join(', ')}</p>
	</div>
	<div class="price">$ {option.price}</div>
	<ul class="features">
		{#each option.features as feature}
			<li>{feature}</li>
		{/each}
	</ul>
</div>
{#if isLast}
	<div class="card">
		<h3>Refer a Friend:</h3>
		<div class="price">Get 5% OFF</div>
		<ul class="points">
			<li>Get 5% off for each friend if they sign up for any program.</li>
			<li>Sibling discount is 5% off (Per sibling)</li>
			<li>
				<a href="sms:+19545910606">Text us</a> to get your promo code.
			</li>
		</ul>
	</div>
{/if}

<style>
	.card {
		padding: var(--spacing-lg);
		border: 2px solid var(--color-accent);
		border-radius: var(--radius-md);
		background: var(--color-bg);
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		transition: transform 0.2s ease-in-out;
		align-items: center;
		min-width: 330px;
	}

	.card:hover {
		transform: translateY(-4px);
		box-shadow:
			0 4px 6px -1px var(--color-accent),
			0 2px 4px -2px var(--color-accent-dark);
	}

	.card.popular {
		border-width: 3px;
	}

	p,
	h3 {
		text-align: center;
	}

	h3 {
		font-size: var(--font-size-lg);
	}

	.time {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
		height: 40px;
	}

	.price {
		display: flex;
		align-items: flex-end;
		gap: var(--spacing-sm);
		text-align: center;
		font-size: var(--font-size-xl);
		font-weight: var(--font-weight-bold);
	}

	.features {
		list-style: none;
		padding: 0;
		margin: 0;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	.features li {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
	}

	.features li::before {
		content: '✓';
		font-weight: var(--font-weight-bold);
	}
</style>
