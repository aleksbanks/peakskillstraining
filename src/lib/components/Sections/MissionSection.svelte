<section id="mission-section" aria-label="mission section">
	<div class="content" aria-label="mission content">
		<div class="mission-header">
			<h4 aria-label="our mission">Our Mission</h4>
			<h2 aria-label="mission statement">
				Welcome to Peak Skills Training — Where Future Champions Begin
			</h2>
		</div>
		<div class="mission-content" aria-label="mission statement">
			<p>
				At Peak Skills Training, we help kids grow through basketball-building confidence,
				discipline, and a love for the game.
			</p>

			<div class="mission-content-item">
				<p>
					Our FIBA-approved program was designed by a professional player with top international
					coaches and offers a clear development path from ages 4 to 14.
				</p>
				<ul>
					<li><u>Ages 4-6:</u> Movement, coordination, and fun.</li>
					<li><u>Ages 7-15:</u> Fundamentals, shooting, ball control, and athletic skills.</li>
					<li><u>Advanced:</u> Game play, tactics, and preparation for varsity and college.</li>
				</ul>
			</div>

			<p>
				In every session, we focus on structure, safety, and support-creating an environment where
				kids thrive both on and off the court.
			</p>
		</div>
		<a href="/#contact">
			<button class="primary button-uppercase">sign up now</button>
		</a>
	</div>
</section>

<style>
	.content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		padding: var(--spacing-lg);
		max-width: 100vw;
	}

	.mission-header {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	.mission-content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-lg);
	}

	.mission-content-item {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xxs);
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
		.mission-content {
			gap: var(--spacing-md);
		}
	}
</style>
