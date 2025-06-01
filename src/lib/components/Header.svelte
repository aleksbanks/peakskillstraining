<script lang="ts">
	import { onMount } from 'svelte';
	import { classnames } from '$lib/utils/classnames';
	let scrolled = false;

	/** Adds a scrolled class to the header when the user scrolls down. */
	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 10; // 10px threshold
		};
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header class={classnames('header', scrolled && 'scrolled')} aria-label="header with navigation">
	<div class="logo">
		<a href="/">
			<img src="/peak-logo.avif" alt="Peak Skills logo" />
		</a>
	</div>

	<nav class="nav" aria-label="main navigation">
		<a class="navItem" href="/">Home</a>
		<a class="navItem" href="/programs">Youth Programs</a>
		<a class="navItem" href="/#gym-section">Gyms</a>
		<a class="navItem" href="/#mission-section">Mission</a>
		<a class="navItem" href="/#founder-section">Founder</a>
		<a class="navItem" href="/#contact">
			<button class="secondary button-uppercase">Start training</button>
		</a>
	</nav>
</header>

<style>
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
		background-color: var(--color-bg);
		border-bottom: 1px solid var(--color-border);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--spacing-md) var(--spacing-lg);
		transition: padding 0.2s;
	}

	.header.scrolled {
		padding: calc(var(--spacing-xs)) var(--spacing-lg);
	}

	.logo img {
		width: 58px;
		height: 50px;
		border-radius: var(--radius-xs);
		object-fit: cover;
	}

	.nav {
		display: flex;
		align-items: center;
		gap: var(--spacing-sm);
	}

	.navItem {
		text-decoration: none;
		text-transform: uppercase;
		font-weight: var(--font-weight-normal);
		font-size: var(--font-size-sm);
		color: var(--color-text);
		padding: var(--spacing-sm);
		transition: opacity var(--transition);
	}

	.navItem:hover {
		opacity: 0.5;
	}
</style>
