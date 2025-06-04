<script lang="ts">
	import Testimonial from '$lib/components/Helpers/Testimonial.svelte';
	import type { EmblaOptionsType } from 'embla-carousel';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { Testimonial as TestimonialType } from '$lib/components/Helpers/Testimonial';

	type Props = {
		testimonials: TestimonialType[];
	};

	let { testimonials }: Props = $props();
	let options: EmblaOptionsType = { loop: true };
</script>

<div class="carousel embla" use:emblaCarouselSvelte={{ options, plugins: [] }}>
	<div class="embla__container">
		{#each testimonials as testimonial}
			<Testimonial {testimonial} />
		{/each}
	</div>
</div>

<style module>
	.embla {
		overflow: hidden;
	}
	.embla__container {
		display: flex;
	}
	.carousel {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-lg);
	}
</style>
