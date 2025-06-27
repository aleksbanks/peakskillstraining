<section id="welcome-section" aria-label="welcome section">
	<div class="content" aria-label="welcome content">
		<h4 aria-label="welcome to peak skills">Welcome to Peak Skills</h4>
		<h1 aria-label="basketball learning and development">BASKETBALL LEARNING AND DEVELOPMENT</h1>
		<p aria-label="welcome message">
			We specialize in teaching and providing all the necessary knowledge and skills that will help
			your child go from 0 to college.
		</p>
		<a href="/#contact"><button class="primary button-uppercase">train with us</button></a>
	</div>
</section>

<style>
	h1 {
		letter-spacing: 0.01em;
		text-align: center;
	}

	p {
		max-width: 600px;
		text-align: center;
	}

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: var(--spacing-md);
		padding: var(--spacing-lg);
		max-width: 100vw;
	}

	button {
		font-weight: var(--font-weight-semibold);
	}

	@media (max-width: 600px) {
		.content {
			gap: var(--spacing-sm);
			padding: var(--spacing-md) var(--spacing-xs);
			max-width: 98vw;
		}
		p {
			max-width: 95vw;
		}
	}
</style>
