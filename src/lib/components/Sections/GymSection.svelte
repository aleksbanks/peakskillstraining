<script lang="ts">
	type Gym = {
		location: string;
		address: string;
		description: string;
		link: string;
	};

	const GYMS: Gym[] = [
		{
			location: 'Hialeah, FL',
			address: '8081 W 28th Ave, Hialeah, FL 33016',
			description:
				"GamePoint Miami is a brand-new indoor basketball gymnasium. With adjustable hoops and a spacious, clean environment, it's perfect for training sessions, clinics, and youth development programs.",
			link: 'gamepoint'
		},

		{
			location: 'Hollywood, FL',
			address: '5199 Pembroke Rd Hollywood, FL',
			link: 'hollywood',
			description:
				'Community Center Gym is a full-sized indoor basketball space ideal for youth training and development. It features adjustable hoops and additional side baskets, making it flexible for group drills and individual work.'
		}
	];
</script>

<section id="gym-section" aria-label="gym section">
	<h2>Our gyms</h2>

	<div class="content" aria-label="gyms information">
		{#each GYMS as gym, i}
			<div class="gym-container">
				<div class="gym">
					<div class="gym-info" aria-label="gym information">
						<p class="location" aria-label="gym location">{gym.location}</p>
						<p class="address" aria-label="gym address">{gym.address}</p>
						<p aria-label="gym description">{gym.description}</p>
					</div>
					<a href={`/programs#${gym.link}`} aria-label="choose program button"
						><button>Choose program</button></a
					>
				</div>
				{#if i % 2 === 0 && i < GYMS.length - 1}
					<hr />
				{/if}
			</div>
		{/each}
	</div>
</section>

<style>
	p {
		text-align: center;
	}

	.content {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		gap: var(--spacing-md);
	}

	.gym-container {
		display: flex;
		gap: var(--spacing-md);
	}

	.gym {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		align-items: center;
		justify-content: space-between;
	}

	.gym-info {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
		padding: 0 var(--spacing-md);
		align-items: center;
	}

	.location {
		font-size: var(--font-size-lg);
		font-weight: var(--font-weight-bold);
	}

	.address {
		font-size: var(--font-size-md);
		font-weight: var(--font-weight-normal);
	}

	hr {
		margin: var(--spacing-xl) 0;
		opacity: 0.5;
		border-width: 0.1px;
	}
</style>
