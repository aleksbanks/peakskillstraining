<script>
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import WelcomeSection from '$lib/components/Sections/WelcomeSection.svelte';
</script>

<Header />
<main aria-label="site content">
	<WelcomeSection />

	<slot />
</main>
