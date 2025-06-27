<!-- Lightbox Gallery Component (gallery of photos that can be opened in a lightbox modal on click) -->
<script lang="ts">
	import type { GymPhoto } from '$lib/types/gym';
	import { onMount } from 'svelte';

	let { photos } = $props<{
		photos: GymPhoto[];
	}>();

	let isOpen = $state(false);
	let currentIndex = $state(0);
	let lightboxElement = $state<HTMLDivElement | null>(null);

	// Open the lightbox
	function openLightbox(index: number) {
		currentIndex = index;
		isOpen = true;
		document.body.style.overflow = 'hidden';
	}

	// Close the lightbox
	function closeLightbox() {
		isOpen = false;
		document.body.style.overflow = '';
	}

	// Go to the next image
	function next() {
		currentIndex = (currentIndex + 1) % photos.length;
	}

	// Go to the previous image
	function prev() {
		currentIndex = (currentIndex - 1 + photos.length) % photos.length;
	}

	// Handle keydown events
	function handleKeydown(event: KeyboardEvent) {
		if (!isOpen) return;

		switch (event.key) {
			case 'ArrowRight':
				next();
				break;
			case 'ArrowLeft':
				prev();
				break;
			case 'Escape':
				closeLightbox();
				break;
		}
	}

	// Add event listener for keydown events
	onMount(() => {
		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('keydown', handleKeydown);
			document.body.style.overflow = '';
		};
	});
</script>

<div class="gallery">
	<div class="photo-grid">
		{#each photos as photo, i}
			<button class="photo-button" onclick={() => openLightbox(i)} aria-label={photo.alt}>
				<img src={photo.url} alt={photo.alt} />
			</button>
		{/each}
	</div>

	{#if isOpen}
		<div
			class="lightbox"
			bind:this={lightboxElement}
			onclick={closeLightbox}
			role="dialog"
			tabindex="0"
			aria-modal="true"
			aria-label="Image gallery lightbox"
		>
			<button class="close" onclick={closeLightbox} aria-label="Close lightbox">×</button>
			<button
				class="nav prev"
				onclick={(e) => {
					e.stopPropagation();
					prev();
				}}
				aria-label="Previous image">‹</button
			>
			<button
				class="nav next"
				onclick={(e) => {
					e.stopPropagation();
					next();
				}}
				aria-label="Next image">›</button
			>

			<div class="lightbox-content" onclick={(e) => e.stopPropagation()}>
				<img src={photos[currentIndex].url} alt={photos[currentIndex].alt} />
			</div>
		</div>
	{/if}
</div>

<style>
	.gallery {
		width: 100%;
	}

	.photo-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(320px, 1fr));
		gap: var(--spacing-md);
	}

	.photo-grid img {
		width: 100%;
		height: 250px;
		object-fit: cover;
		border-radius: var(--radius-md);
	}

	.lightbox {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.9);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.lightbox-content {
		position: relative;
		max-width: 90%;
		max-height: 90dvh;
	}

	.lightbox-content img {
		max-width: 100%;
		max-height: 90dvh;
		object-fit: contain;
	}

	.close {
		position: absolute;
		top: 20px;
		right: 20px;
		background: none;
		border: none;
		color: white;
		font-size: 40px;
		cursor: pointer;
		z-index: 1001;
		padding: var(--spacing-sm);
		line-height: 1;
	}

	.nav {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		background: none;
		border: none;
		color: white;
		font-size: 60px;
		cursor: pointer;
		padding: var(--spacing-md);
		z-index: 1001;
		transition: opacity 0.2s;
	}

	.nav:hover {
		opacity: 0.8;
	}

	.prev {
		left: 20px;
	}

	.next {
		right: 20px;
	}

	@media (max-width: 768px) {
		.nav {
			font-size: 40px;
		}

		.close {
			font-size: 30px;
		}
	}

	img {
		border-radius: var(--radius-md);
	}

	.photo-button {
		margin: 0;
		padding: 0;
		border: none;
		background: none;
		cursor: pointer;
		transition: transform 0.2s ease-in-out;
		position: relative;
		opacity: 0.8;
		width: 100%;
	}

	.photo-button:hover {
		transform: scale(1.02);
		opacity: 1;
	}

	.photo-button img {
		width: 100%;
		height: 250px;
		object-fit: cover;
		border-radius: var(--radius-md);
	}
</style>
