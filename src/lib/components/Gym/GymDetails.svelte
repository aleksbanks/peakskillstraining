<script lang="ts">
	import type { Gym } from '$lib/types/gym';
	import GymCard from '../Cards/GymCard.svelte';
	import LightboxGallery from '../Gallery/LightboxGallery.svelte';
	import LocationIcon from '../Icons/LocationIcon.svelte';
	let { gym } = $props<{
		gym: Gym;
	}>();
</script>

<div class="gym-details">
	<section class="inside-look">
		<h4 aria-label="inside look">Inside Look</h4>
		<h2 aria-label="gym name - inside look">{gym.name}, {gym.location}</h2>
		<a
			target="_blank"
			rel="noopener noreferrer"
			href={`https://www.google.com/maps/search/?api=1&query=${gym.name}, ${gym.location}`}
			class="location"
		>
			<LocationIcon />
			<h3 aria-label="gym location">{gym.address}</h3>
		</a>
		<p aria-label="gym description">{gym.description}</p>
	</section>

	<section class="photos">
		<LightboxGallery photos={gym.photos} />
	</section>

	<section class="pricing">
		<div class="cards-grid">
			{#each gym.purchaseOptions as option}
				<GymCard {option} isLast={option === gym.purchaseOptions[gym.purchaseOptions.length - 1]} />
			{/each}
		</div>
	</section>
</div>

<style>
	h4,
	h2,
	h3,
	p {
		text-align: center;
	}

	.location {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
	}

	.gym-details {
		max-width: 1200px;
		margin: 0 auto;
		padding: var(--spacing-sm) var(--spacing-lg);
		transition: all 0.4s ease-in-out;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
	}

	.cards-grid {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
		gap: var(--spacing-md) var(--spacing-sm);
	}

	@media (max-width: 768px) {
		.gym-details {
			padding: var(--spacing-md);
		}

		.cards-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
