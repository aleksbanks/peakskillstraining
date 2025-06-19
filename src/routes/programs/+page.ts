import type { PageLoad } from './$types';

// Load the active tab from the URL
export const load: PageLoad = ({ url }) => {
	const tab = url.searchParams.get('tab');
	return {
		activeTab: tab || 'gamepoint'
	};
};
