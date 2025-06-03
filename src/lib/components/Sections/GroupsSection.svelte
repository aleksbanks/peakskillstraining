<script lang="ts">
	import Card from '$lib/components/Helpers/Card.svelte';

	type Group = {
		title: string;
		description: string;
		id: string;
	};

	const GROUPS: Group[] = [
		{
			title: 'Toddlers 4-6 years old',
			description:
				'A playful introduction to basketball that builds motor skills, coordination, and confidence through movement - focused activities.',
			id: '1'
		},
		{
			title: 'Fundamentals Group 7-15 years old',
			description:
				'Build your foundation with our FIBA approved program. Develop essential movement and basketball skills that set the stage for long-term success.',
			id: '2'
		},
		{
			title: 'Advanced group 10+',
			description:
				'High-intensity training focused on performance, strategy, basketball IQ, and preparing players for competitive-level basketball.',
			id: '3'
		},
		{
			title: 'Private sessions 10+ (very limited)',
			description:
				"1 on 1 training tailored to each player's needs. Perfect for building confidence, correcting mistakes way faster, and accelerating skill development. Ideal for those seeking maximum progress beyond group sessions.",
			id: '4'
		}
	];
</script>

<section id="groups-section" aria-labelledby="groups-heading">
	<div class="groups-content">
		<div class="groups-header">
			<h4>Improve your game</h4>
			<h2 id="groups-heading">Groups for everyone</h2>
		</div>
		<div class="groups-grid">
			{#each GROUPS as group}
				<Card title={group.title} description={group.description} number={group.id} width={30} />
			{/each}
		</div>
	</div>
</section>

<style>
	section {
		background:
			linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
			url('/bg-image.avif') no-repeat center center;
		background-size: cover;
		min-height: 100vh;
	}

	.groups-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-lg);
		max-width: 80dvw;
	}

	.groups-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.groups-grid {
		display: flex;
		gap: var(--spacing-lg);
		flex-wrap: wrap;
		justify-content: center;
	}

	@media (max-width: 600px) {
		.groups-grid {
			flex-direction: column;
			gap: var(--spacing-md);
		}
	}
</style>
