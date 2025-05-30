<header class="header" aria-label="header with navigation">
	<div class="logo">
		<a href="/">
			<img src="/peak-logo.avif" alt="Peak Skills logo" />
		</a>
	</div>

	<nav class="nav" aria-label="main navigation">
		<a class="navItem" href="/">Home</a>
		<a class="navItem" href="/programs">Youth Programs</a>
		<a class="navItem" href="/#contact"><button class="secondary">Start training</button></a>
	</nav>
</header>

<style>
	.header {
		background-color: var(--color-bg);
		border-bottom: 1px solid var(--color-border);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: var(--spacing-md) var(--spacing-lg);
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
