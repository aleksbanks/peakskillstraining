<script>
	import FacebookLogo from './Icons/FacebookLogo.svelte';
	import InstagramLogo from './Icons/InstagramLogo.svelte';
</script>

<footer>
	<div class="footer-content">
		<div class="footer-item">
			<a href="/">
				<img src="/peak-logo.avif" alt="Logo" />
			</a>
			<p>Elevate Your Game with Expert Coaching and Comprehensive Programs.</p>
		</div>
		<div class="footer-item">
			<h3>Contact Us</h3>
			<div class="contact-info">
				<a href="mailto:pskillstraining@yahoo.com">pskillstraining@yahoo.com</a>
				<a href="tel:+1954-5910606">954-5910606</a>
			</div>
			<hr />
			<div class="address-info">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://maps.app.goo.gl/F6RJQFKTqySpkLaJ6"
					>Miami Game Point.<br />8081 W 28 th Ave, Hialeah,<br />FL 33016</a
				>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://maps.app.goo.gl/tX5eFFUoiis9H2327"
					>Washington Park Community Center<br />5199 Pembroke Rd,<br />Hollywood, FL 33021
				</a>
			</div>
		</div>
		<div class="footer-item">
			<h3>Follow Us</h3>
			<div class="social-links">
				<a href="https://www.facebook.com/peakfitness">
					<FacebookLogo />
				</a>
				<a href="https://www.instagram.com/peakfitness"><InstagramLogo /></a>
			</div>
		</div>
	</div>
</footer>

<style>
	footer {
		padding: 4vw;
		border-top: 1px solid var(--color-border);
		margin-top: auto;
		background-color: var(--color-bg);
	}

	p,
	a {
		font-size: var(--font-size-lg);
	}

	img {
		width: 100px;
		height: 100px;
	}

	.contact-info,
	.address-info {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-xs);
	}

	.footer-content {
		display: grid;
		grid-template-columns: 3fr 3fr 2fr;
		gap: var(--spacing-lg);
		max-width: 1200px;
		margin: 0 auto;
	}

	.footer-item {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
	}

	.footer-item:not(:last-child) {
		padding-right: var(--spacing-xl);
	}

	hr {
		opacity: 0.2;
		border-width: 0.1px;
	}

	.social-links {
		display: flex;
		flex-direction: row;
		gap: var(--spacing-md);
	}

	@media (max-width: 900px) {
		footer {
			padding: var(--spacing-lg) var(--spacing-md);
		}
		.footer-content {
			gap: var(--spacing-sm);
			grid-template-columns: 1fr;
		}
	}

	@media (max-width: 600px) {
		footer {
			padding: var(--spacing-md) var(--spacing-xs);
		}
		.footer-content {
			grid-template-columns: 1fr;
			text-align: center;
			gap: var(--spacing-sm);
		}

		.footer-item {
			gap: var(--spacing-sm);
		}
		.footer-item:not(:last-child) {
			padding-right: 0;
			padding-bottom: var(--spacing-sm);
		}
		img {
			display: none;
		}
		.social-links {
			justify-content: center;
		}
		.contact-info,
		.address-info {
			align-items: center;
		}
		p,
		a {
			font-size: var(--font-size-sm);
		}
		h3 {
			font-size: var(--font-size-md);
		}
	}
</style>
