<section id="founder-section" aria-label="founder section">
	<div class="content" aria-label="founder content">
		<img
			loading="lazy"
			decoding="async"
			alt="founder PAVEL SERGEEV"
			src="/pavel-sergeev.png"
			sizes="50vw"
		/>

		<div class="founder-info" aria-label="founder info">
			<h4>MEET THE FOUNDER</h4>
			<h2>PAVEL SERGEEV</h2>

			<div class="founder-info-content">
				<p>
					Pavel Sergeev boasts an impressive 20-year professional basketball career, competing at
					the highest levels of European basketball.<br />Throughout his career, he played in the
					prestigious <b>VTB United League</b>, participating in <b>EuroCup</b> and
					<b>EuroLeague</b>
					competitions, which are among the most competitive championships in Europe.<br />As a
					point guard, Sergeev has extensive experience with top-tier teams including
					<b>UNICS Kazan</b>,
					<b>Zenit Saint Petersburg</b>, and <b>Spartak Saint Petersburg</b>. His remarkable career
					highlights include:
				</p>
				<ul>
					<li>Winning in multiple international championships.</li>
					<li>Participating in the VTB United League for over a decade.</li>
					<li>Achieving a notable 54.8% three-point shooting rate in the 2021/22 season.</li>
					<li>Selected for the All-Star Game and 3-Point Contest in 2018,19,20,21.</li>
				</ul>
				<p>
					With his deep understanding of basketball dynamics and extensive professional experience,
					Pavel has developed FIBA-approved training programs at his academy. These programs
					leverage insights from world-class coaches and his personal expertise, ensuring young
					athletes receive comprehensive basketball education and skill development.
				</p>
			</div>

			<a href="/#contact">
				<button class="primary button-uppercase">train with us</button>
			</a>
		</div>
	</div>
</section>

<style>
	.content {
		display: grid;
		grid-template-columns: 7fr 5fr;
		gap: var(--spacing-md);
		max-width: 80dvw;
		margin-left: unset;
		height: fit-content;
	}

	img {
		object-fit: cover;
		height: 100%;
		width: 100%;
		max-width: 700px;
	}

	.founder-info {
		display: flex;
		flex-direction: column;
		height: fit-content;
		gap: var(--spacing-sm);
	}

	.founder-info-content {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-sm);
	}

	button {
		font-weight: var(--font-weight-semibold);
	}

	@media (min-width: 1700px) {
		.content {
			grid-template-columns: 5fr 7fr;
			margin-left: auto;
		}
	}

	@media (max-width: 1240px) {
		img {
			max-height: 594px;
		}
	}

	@media (max-width: 576px) {
		.content {
			grid-template-columns: 2fr 3fr;
		}
		img {
			max-width: 500px;
		}
	}
</style>
