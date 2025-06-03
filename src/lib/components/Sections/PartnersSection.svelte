<script lang="ts">
	import Card from '$lib/components/Helpers/Card.svelte';

	type Partner = {
		id: string;
		name: string;
		description: string;
		url: string;
		instagram: string;
	};
	const PARTNERS: Partner[] = [
		{
			id: '1',
			name: 'Miami Game Point',
			description:
				"Game Point Miami, a community-driven state-of-the-art sports facility for Basketball, Soccer, and Pickleball enthusiasts of all ages and levels located in the heart of Miami - Hialeah,Florida. Our facility boasts a cutting-edge design, featuring two distinct areas. A half basketball court, perfect for honing your skills or friendly matches. The second area is a versatile full court that transforms into a futsal or pickleball court, offering flexibility for diverse sports preferences. Whether you're a basketball enthusiast, soccer fanatic, or pickleball pro, Game Point Miami provides the ideal environment for your passion.",
			url: 'https://gamepointmiami.com/',
			instagram: 'https://www.instagram.com/gamepointmiami/'
		},
		{
			id: '2',
			name: 'The Shot Academy (Greece)',
			description:
				'Brand established as enthusiastic movement in field of basketball, working on professional individual players and coaches development, education and invetning basketball aid products to help these individuals to reach their goals. with plan to grow its potential with its team, players, clients and there partners.is to reach its goals in order to make thier players, clients, coaches and partners happy, well informed and highly skilled.',
			url: 'https://www.the-shot.gr/',
			instagram: 'https://www.instagram.com/taketheshot.gr/'
		}
	];
</script>

<section id="partners-section" aria-labelledby="partners-heading">
	<div class="partners-content">
		<h2 id="partners-heading">Our Partners</h2>
		<div class="partners-grid">
			{#each PARTNERS as partner}
				<Card
					number={partner.id}
					title={partner.name}
					description={partner.description}
					buttonText="Website"
					buttonLink={partner.url}
					secondaryButtonText="Instagram"
					secondaryButtonLink={partner.instagram}
					width={45}
				/>
			{/each}
		</div>
	</div>
</section>

<style>
	.partners-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-lg);
		max-width: 80dvw;
	}

	.partners-grid {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
	}

	@media (max-width: 600px) {
		.partners-grid {
			flex-direction: column;
		}
	}
</style>
