<script lang="ts">
	import TestimonialsCarousel from './TestimonialsCarousel.svelte';
	import type { Testimonial } from '$lib/components/Helpers/Testimonial';

	const TESTIMONIALS: Testimonial[] = [
		{
			id: '1',
			name: 'Yakov',
			quote:
				'Coach Pavel is a next level elite coach. He taught me how the game of basketball is played, and how you need to understand the moves you are doing and their effectiveness. He fixed my jumpshot, taught me lots of simple moves that you can switch up to make many moves, taught me the proper way to finish at the rim, and taught me press defense. Lastly, he also taught me more about spacing and how coaches think. This is really one of the best coaches you can go for, and I have no regrets that I picked him.',
			position: 'High school varsity team player'
		},
		{
			id: '3',
			name: 'Mike',
			quote:
				'With PST online programs I started to believe in myself and I am sure that soon I will make my High school varsity team. Now I understand that simple game is much more effective. This academy is FIRE. No doubt at all.',
			position: 'High school student'
		},
		{
			id: '4',
			name: 'Sarah',
			quote:
				"Pavel's training methods are incredible. Not only did he help me improve my shooting and dribbling, but he also taught me valuable strategies and plays.",
			position: '12 y.o. Middle school student'
		},
		{
			id: '5',
			name: 'John Holland',
			quote:
				"Peak Skills Training's online basketball academy focuses on what really matters for basketball players. They provide targeted workouts that are focused on developing specific skills, rather than overwhelming you with unnecessary drills.",
			position: 'Pro overseas player'
		},
		{
			id: '6',
			name: 'Emily',
			quote:
				"Peak Skills Training's online basketball programs have been a game-changer for my child's development. The convenience of being able to access high-quality workouts from home has been invaluable.",
			position: 'Parent of Athlete'
		},
		{
			id: '7',
			name: 'Max',
			quote: 'Super satisfied!!!',
			position: 'Basketball player'
		},
		{
			id: '8',
			name: 'Alex',
			quote:
				'I am grateful for the opportunity to work with coach Pavel. His coaching style is motivating and his drills are challenging, making our workouts extremely effective.',
			position: 'D2 College basketball player'
		}
	];
</script>

<section id="testimonials-section" aria-label="Testimonials">
	<h4 aria-label="Testimonials">Testimonials</h4>
	<h2 aria-label="What Our Customers Say">What Our Customers Say</h2>
	<TestimonialsCarousel testimonials={TESTIMONIALS} />
</section>

<style>
	h2 {
		font-size: var(--font-size-xl);
		text-align: center;
		word-break: break-word;
		padding: 0 var(--spacing-sm);
	}
	@media (max-width: 600px) {
		h2 {
			font-size: var(--font-size-lg);
			padding: 0 var(--spacing-xs);
		}
	}
</style>
