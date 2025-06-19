<script>
	import WelcomeSection from '$lib/components/Sections/WelcomeSection.svelte';
	import GymSection from '$lib/components/Sections/GymSection.svelte';
	import MissionSection from '$lib/components/Sections/MissionSection.svelte';
	import FounderSection from '$lib/components/Sections/FounderSection.svelte';
	import GroupsSection from '$lib/components/Sections/GroupsSection.svelte';
	import PartnersSection from '$lib/components/Sections/PartnersSection.svelte';
	import TestimonialsSection from '$lib/components/Sections/Testimonials.svelte';
	import { fade } from 'svelte/transition';
</script>

<main aria-label="main page content" in:fade={{ duration: 300 }}>
	<WelcomeSection />
	<GymSection />
	<MissionSection />
	<FounderSection />
	<GroupsSection />
	<PartnersSection />
	<TestimonialsSection />
</main>
