export type PurchaseOption = {
	title: string;
	price: number;
	features: string[];
	isPopular?: boolean;
	days: string[];
};

export type GymPhoto = {
	url: string;
	alt: string;
};

export type Gym = {
	id: string;
	name: string;
	location: string;
	address: string;
	description: string;
	photos: GymPhoto[];
	purchaseOptions: PurchaseOption[];
};
