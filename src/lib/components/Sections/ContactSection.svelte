<script lang="ts">
	import { fade } from 'svelte/transition';
	import emailjs from '@emailjs/browser';

	let isLoading = $state(false);
	let isSubmitted = $state(false);

	const SERVICE_ID = 'service_zw5154b';
	const TEMPLATE_ID = 'template_pr1b6j4';
	const PUBLIC_KEY = '57J1Kdl7kvNHYMVFN';

	const sendEmail = (e: Event) => {
		e.preventDefault();
		isLoading = true;

		const form = e.target as HTMLFormElement;
		const formData = new FormData(form);

		const data = {
			fullName: formData.get('fullName'),
			email: formData.get('email'),
			age: formData.get('age'),
			phone: formData.get('phone')
		};
		emailjs.send(SERVICE_ID, TEMPLATE_ID, data, PUBLIC_KEY).then(
			() => {
				console.log('SUCCESS!');
				isSubmitted = true;
			},
			(error) => {
				console.log('FAILED...', error.text);
			}
		);
	};
</script>

<section id="contact" aria-labelledby="contact-heading" in:fade={{ duration: 300 }}>
	<div class="contact-content">
		<div class="contact-content-header">
			<h4>Become a member</h4>
			<h2 id="contact-heading">Contact us</h2>
		</div>
		<form id="contact-form" on:submit|preventDefault={sendEmail}>
			<input
				placeholder="Full Name"
				type="text"
				id="fullName"
				name="fullName"
				required
				disabled={isSubmitted}
			/>
			<input
				placeholder="Email"
				type="email"
				id="email"
				name="email"
				required
				disabled={isSubmitted}
			/>
			<input
				placeholder="Athlete Age"
				min="0"
				type="number"
				id="age"
				name="age"
				required
				disabled={isSubmitted}
			/>
			<input
				placeholder="Phone Number"
				type="tel"
				id="phone"
				name="phone"
				required
				disabled={isSubmitted}
			/>

			<button type="submit" disabled={isLoading || isSubmitted} class="primary">
				{isLoading ? 'Sending...' : isSubmitted ? 'Sent!' : 'Send Message'}
			</button>
		</form>
	</div>
</section>

<style>
	section {
		background: var(--color-primary);
		background-size: cover;
		width: 99dvw;
	}

	.contact-content-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-sm);
	}

	.contact-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: var(--spacing-lg);
		max-width: 100%;
		width: 600px;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		width: 100%;
	}

	input {
		width: 100%;
	}

	button {
		height: 50px;
		border-radius: var(--radius-sm);
	}
</style>
