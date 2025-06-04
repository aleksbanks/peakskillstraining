<script lang="ts">
	import { tick } from 'svelte';
	import type { Testimonial } from '$lib/components/Helpers/Testimonial';

	type Props = {
		testimonial: Testimonial;
	};

	let { testimonial }: Props = $props();

	let open = $state(false);
	let isClamped = $state(false);
	let quoteRef: HTMLParagraphElement | null = null;

	const toggleOpen = () => {
		open = !open;
	};

	function checkClamped() {
		if (quoteRef) {
			const { scrollHeight, clientHeight } = quoteRef;
			isClamped = scrollHeight > clientHeight + 1;
		}
	}

	$effect(() => {
		(async () => {
			await tick();
			checkClamped();
			// Also check after fonts load (for web fonts)
			if (typeof document !== 'undefined' && document.fonts) {
				document.fonts.ready.then(checkClamped);
			}
		})();
	});

	// Re-check on window resize
	if (typeof window !== 'undefined') {
		window.addEventListener('resize', checkClamped);
	}
</script>

<div class="testimonial embla__slide">
	<p bind:this={quoteRef} class:truncated={!open} class="testimonial-quote">
		{testimonial.quote}
	</p>
	{#if isClamped}
		{#if open}
			<button onclick={toggleOpen}>Read less</button>
		{:else}
			<button onclick={toggleOpen}>Read more</button>
		{/if}
	{/if}

	<div class="testimonial-footer">
		<p class="testimonial-name">{testimonial.name}</p>
		<p class="testimonial-position">{testimonial.position}</p>
	</div>
</div>

<style>
	.embla__slide {
		flex: 0 0 32.9%;
		min-width: 0;
	}

	.testimonial {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-md);
		padding: var(--spacing-lg);
		opacity: 0.9;
		text-align: center;
	}

	.truncated {
		display: -webkit-box;
		-webkit-line-clamp: 4;
		line-clamp: 4;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	button {
		color: color-mix(in srgb, var(--color-text), black 20%);
		background-color: transparent;
		padding: 0;
	}

	.testimonial-name {
		font-weight: var(--font-weight-bold);
	}

	.testimonial-position,
	.testimonial-name,
	.testimonial-quote {
		font-size: var(--font-size-lg);
	}
</style>
