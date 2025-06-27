<script lang="ts">
	import { onMount } from 'svelte';
	import { classnames } from '$lib/utils/classnames';
	let scrolled = false;
	let isMenuOpen = $state(false);

	/** Adds a scrolled class to the header when the user scrolls down. */
	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 10; // 10px threshold
		};
		window.addEventListener('scroll', handleScroll);
		handleScroll();
		return () => window.removeEventListener('scroll', handleScroll);
	});

	function handleBurgerClick() {
		isMenuOpen = !isMenuOpen;
	}

	function handleOverlayClick(e: MouseEvent) {
		if (e.target === e.currentTarget) {
			isMenuOpen = false;
		}
	}

	function handleKeydown(e: KeyboardEvent) {
		if (e.key === 'Escape') {
			isMenuOpen = false;
		}
	}

	$effect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	});
</script>

<header class={classnames('header', scrolled && 'scrolled')} aria-label="header with navigation">
	<div class="logo">
		<a href="/">
			<img src="/peak-logo.avif" alt="Peak Skills logo" />
		</a>
	</div>

	<!-- Burger button for mobile -->
	<button
		class={classnames('burger', isMenuOpen && 'open')}
		aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
		aria-expanded={isMenuOpen}
		aria-controls="main-navigation"
		onclick={handleBurgerClick}
	>
		<span class="burger-bar top"></span>
		<span class="burger-bar middle"></span>
		<span class="burger-bar bottom"></span>
	</button>

	<!-- Desktop nav -->
	<nav class="nav" aria-label="main navigation" id="main-navigation">
		<a class="navItem" href="/">Home</a>
		<a class="navItem" href="/programs">Youth Programs</a>
		<a class="navItem" href="/#gym-section">Gyms</a>
		<a class="navItem" href="/#mission-section">Mission</a>
		<a class="navItem" href="/#founder-section">Founder</a>
		<a class="navItem" href="/#contact">
			<button class="secondary button-uppercase">Start training</button>
		</a>
	</nav>

	<!-- Mobile nav overlay (always rendered for animation) -->
	<div
		class={classnames('nav-overlay', isMenuOpen && 'open')}
		tabindex="-1"
		onclick={handleOverlayClick}
		onkeydown={handleKeydown}
		style="pointer-events: {isMenuOpen ? 'auto' : 'none'};"
	>
		<nav class={classnames('nav-mobile', isMenuOpen && 'open')} aria-label="mobile navigation">
			<a class="navItem" href="/" onclick={() => (isMenuOpen = false)}>Home</a>
			<a class="navItem" href="/programs" onclick={() => (isMenuOpen = false)}>Youth Programs</a>
			<a class="navItem" href="/#gym-section" onclick={() => (isMenuOpen = false)}>Gyms</a>
			<a class="navItem" href="/#mission-section" onclick={() => (isMenuOpen = false)}>Mission</a>
			<a class="navItem" href="/#founder-section" onclick={() => (isMenuOpen = false)}>Founder</a>
			<a class="navItem" href="/#contact" onclick={() => (isMenuOpen = false)}>
				<button class="secondary button-uppercase">Start training</button>
			</a>
		</nav>
	</div>
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
		transition: padding var(--transition);
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

	/* Burger styles */
	.burger {
		display: none;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 58px;
		height: var(--spacing-xxl);
		background: none;
		border: none;
		cursor: pointer;
		gap: var(--spacing-xs);
		z-index: 1100;
		transition: background var(--transition);
	}
	.burger-bar {
		display: block;
		width: 100%;
		height: 2px;
		background: var(--color-text);
		border-radius: var(--radius-full);
		margin: 2px 0;
		transition:
			transform var(--transition),
			opacity var(--transition),
			background var(--transition);
	}
	.burger.open .burger-bar.top {
		transform: translateY(10px) rotate(45deg);
	}
	.burger.open .burger-bar.middle {
		opacity: 0;
	}
	.burger.open .burger-bar.bottom {
		transform: translateY(-10px) rotate(-45deg);
	}

	/* Hide nav and show burger on mobile */
	@media (max-width: 900px) {
		.nav {
			display: none;
		}
		.burger {
			display: flex;
		}
	}

	/* Overlay covers the entire viewport */
	.nav-overlay {
		position: fixed;
		top: 80px;
		left: 0;
		width: 100vw;
		height: 100dvh;
		background: rgba(0, 0, 0, 0.65);
		display: flex;
		align-items: flex-start;
		justify-content: center;
		z-index: 1200;
		overflow: hidden;
		opacity: 0;
		transition: opacity var(--transition);
		pointer-events: none;
	}
	.nav-overlay.open {
		opacity: 1;
		pointer-events: auto;
	}

	/* Menu panel slides down from the top, full width */
	.nav-mobile {
		background: var(--color-bg);
		width: 100vw;
		max-width: 100vw;
		height: fit-content;
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		padding: var(--spacing-xxl) var(--spacing-lg) var(--spacing-lg) var(--spacing-lg);
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 0 0 var(--radius-lg) var(--radius-lg);
		transform: translateY(-100%);
		transition: transform var(--transition);
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
	}
	.nav-mobile.open {
		transform: translateY(0);
	}

	.nav-mobile .navItem {
		font-size: var(--font-size-md);
		color: var(--color-text);
		text-align: left;
	}
	.nav-mobile .navItem:hover {
		opacity: 0.5;
	}

	.nav-mobile .navItem button {
		width: 100%;
	}
</style>
