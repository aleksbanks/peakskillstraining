<script lang="ts">
	import Testimonial from '$lib/components/Helpers/Testimonial.svelte';
	import type { EmblaOptionsType, EmblaCarouselType } from 'embla-carousel';
	import emblaCarouselSvelte from 'embla-carousel-svelte';
	import type { Testimonial as TestimonialType } from '$lib/components/Helpers/Testimonial';

	type Props = {
		testimonials: TestimonialType[];
	};

	let { testimonials }: Props = $props();
	let options: EmblaOptionsType = { loop: true };

	// Track active slide
	let activeIndex = $state(0);
	// Embla API
	let emblaApi: EmblaCarouselType | undefined;

	// Handle slide change
	function handleSelect() {
		if (emblaApi) {
			activeIndex = emblaApi.selectedScrollSnap();
		}
	}

	// Scroll to a specific slide
	function scrollTo(index: number) {
		if (emblaApi) {
			emblaApi.scrollTo(index);
		}
	}

	// Initialize Embla API
	function onEmblaInit(event: CustomEvent<EmblaCarouselType>) {
		emblaApi = event.detail;
		emblaApi.on('select', handleSelect);
		handleSelect();
	}
</script>

<div
	class="carousel embla"
	use:emblaCarouselSvelte={{ options, plugins: [] }}
	onemblaInit={onEmblaInit}
>
	<!-- Container for the carousel (each testimonial is a slide)-->
	<div class="embla__container">
		{#each testimonials as testimonial}
			<Testimonial {testimonial} />
		{/each}
	</div>
</div>

<!-- Progress Dots -->
<div class="progress-dots">
	{#each testimonials as _, idx}
		<button
			type="button"
			aria-label={`Go to slide ${idx + 1}`}
			onclick={() => scrollTo(idx)}
			class="dot {idx === activeIndex ? 'dot--active' : 'dot--inactive'}"
			aria-current={idx === activeIndex ? 'true' : undefined}
		></button>
	{/each}
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
		gap: var(--spacing-md);
	}

	.progress-dots {
		display: flex;
		gap: var(--spacing-sm);
		justify-content: center;
		align-items: center;
		height: 100%;
	}

	.dot {
		border-radius: 50%;
		width: var(--spacing-md);
		height: var(--spacing-md);
		transition: background-color 0.5s;
		padding: 0;
	}
	.dot--active {
		background-color: var(--color-accent);
	}
	.dot--inactive {
		background-color: var(--color-secondary);
	}
</style>
