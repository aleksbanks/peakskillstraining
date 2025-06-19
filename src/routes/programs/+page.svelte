<script lang="ts">
	import type { Gym } from '$lib/types/gym';
	import GymDetails from '$lib/components/Gym/GymDetails.svelte';
	import TabList from '$lib/components/Tabs/TabList.svelte';
	import { goto } from '$app/navigation';
	import { fade } from 'svelte/transition';

	let { data } = $props();
	const gyms: Gym[] = [
		{
			id: 'gamepoint',
			name: 'GamePoint Miami',
			location: 'Hialeah, FL',
			address: '8081 W 28th Ave, Hialeah, FL 33016',
			description:
				"Welcome to our partner's beautiful facility - Miami Game Point. Our program provide the best possible basketball development for athletes of all ages and levels. If you care about the future of your children then register them below and lets start!",
			photos: [
				{
					url: '/gyms/gamepoint1.jpg',
					alt: 'GamePoint Miami court view 1'
				},
				{
					url: '/gyms/gamepoint2.jpg',
					alt: 'GamePoint Miami court view 2'
				},
				{
					url: '/gyms/gamepoint3.jpg',
					alt: 'GamePoint Miami court view 3'
				},
				{
					url: '/gyms/gamepoint4.jpg',
					alt: 'GamePoint Miami court view 4'
				}
			],
			purchaseOptions: [
				{
					title: '2 Times a Week',
					price: 199,
					days: ['Wednesday', 'Friday'],
					features: [
						'2 training sessions per week',
						'Group training sessions',
						'Basic skill assessment'
					]
				},
				{
					title: 'Sunday Clinics',
					price: 139,
					days: ['Every Sunday', '	11:15am-1:30pm'],
					features: [
						'IQ development clinic',
						'Spacing rules',
						'Quick decisions',
						'Small games',
						'5v5'
					],
					isPopular: true
				},
				{
					title: '3 Times a Week',
					price: 269,
					days: ['Wednesday, Friday, Sunday'],
					features: [
						'3 training sessions per week',
						'Group training sessions',
						'Basic skill assessment',
						'Our top program with the best possible basketball development.'
					]
				}
			]
		},
		{
			id: 'hollywood',
			name: 'Washington Park Community Center',
			location: 'Hollywood, FL',
			address: '5199 Pembroke Rd Hollywood, FL',
			description:
				'Our program provide the best possible basketball development for athletes of all ages and levels. If you care about the future of your children then register them below and lets start!',
			photos: [
				{
					url: '/gyms/hollywood1.png',
					alt: 'Washington Park court view 1'
				},
				{
					url: '/gyms/hollywood2.png',
					alt: 'Washington Park court view 2'
				}
			],
			purchaseOptions: [
				{
					title: '2 Times a Week',
					price: 199,
					days: ['Tuesday', 'Thursday or Saturday'],
					features: [
						'2 training sessions per week',
						'Group training',
						'Fundamental skill development',
						'Fundamental group: 6 - 7:20pm',
						'Advanced group: 7:25 - 9pm'
					]
				},
				{
					title: '3 times a week',
					price: 269,
					days: ['Tuesday', 'Thursday', 'Saturday'],
					features: [
						'3 training sessions per week',
						'Full facility access',
						'Skill assessment',
						'Fundamental group: 6 - 7:20pm',
						'Advanced group: 7:25 - 9pm'
					],
					isPopular: true
				}
			]
		}
	];

	// Get the initial active tab from the URL or default to the first gym
	let activeTab = $state(gyms.findIndex((gym) => gym.id === data.activeTab) ?? 0);

	// Get the gyms names
	const tabs = gyms.map((gym) => gym.name);

	// Update URL when tab changes
	$effect(() => {
		const currentGym = gyms[activeTab];
		goto(`?tab=${currentGym.id}`, { replaceState: true, keepFocus: true });
	});
</script>

<main aria-label="programs page content" in:fade={{ duration: 300 }}>
	<div class="tabs-container">
		<TabList {tabs} bind:activeTab />
		<GymDetails gym={gyms[activeTab]} />
	</div>
</main>

<style>
	.tabs-container {
		max-width: 1200px;
		margin: 0 auto;
		padding: 0 var(--spacing-lg);
	}

	@media (max-width: 768px) {
		.tabs-container {
			padding: 0 var(--spacing-md);
		}
	}
</style>
