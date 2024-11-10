import { type Category, type CategoryConfig, type Product } from '@/shared/types';

export const CURRENT_CATEGORY = 'pralki';

export const CATEGORY_CONFIG: Partial<Record<Category, CategoryConfig>> = {
	pralki: {
		sorting: {
			id: 'sort',
			label: 'Sortuj po',
			options: [
				{ value: 'default', label: 'Domyślnie' },
				{ value: 'price-asc', label: 'Cena: od najniższej' },
				{ value: 'price-desc', label: 'Cena: od najwyższej' },
				{ value: 'capacity-asc', label: 'Pojemność: od najmniejszej' },
				{ value: 'capacity-desc', label: 'Pojemność: od największej' },
				{
					value: 'popularity-asc',
					label: 'Popularność: od najniższej',
				},
				{
					value: 'popularity-desc',
					label: 'Popularność: od najwyższej',
				},
			],
		},
		filters: [
			{
				id: 'features',
				label: 'Funkcje',
				options: [
					{ value: 'all', label: 'Pokaż wszystkie' },

					{ value: '0', label: 'Drzwi AddWash™' },
					{ value: '1', label: 'Panel AI Control' },
					{ value: '2', label: 'Silnik inwerterowy' },
					{ value: '3', label: 'Wyświetlacz elektroniczny' },
				],
			},
			{
				id: 'energyClass',
				label: 'Klasa energetyczna',
				options: [
					{ value: 'all', label: 'Pokaż wszystkie' },
					{ value: 'A', label: 'A' },
					{ value: 'B', label: 'B' },
					{ value: 'C', label: 'C' },
					{ value: 'D', label: 'D' },
					{ value: 'E', label: 'E' },
					{ value: 'F', label: 'F' },
					{ value: 'G', label: 'G' },
				],
			},
			{
				id: 'capacity',
				label: 'Pojemność',
				options: [
					{ value: 'all', label: 'Pokaż wszystkie' },
					{ value: '9', label: '9kg' },
					{ value: '8', label: '8kg' },
					{ value: '10.5', label: '10.5kg' },
				],
			},
		],
		specificationAttributes: [
			{ id: 'color', label: 'Kolor' },
			{
				id: 'capacityKg',
				label: 'Pojemność (kg)',
			},
			{ id: 'dimensions', label: 'Wymiary (GxSxW)' },
		],
		productFeatures: [
			{ id: 0, name: 'Drzwi AddWash™' },
			{ id: 1, name: 'Panel AI Control' },
			{ id: 2, name: 'Silnik inwerterowy' },
			{ id: 3, name: 'Wyświetlacz elektroniczny' },
		],
	},
};

const productFeatures = CATEGORY_CONFIG.pralki?.productFeatures!;

export const PRODUCTS: Product[] = [
	{
		id: 0,
		name: 'WW90T754ABT, Pralka QuickDrive™, 9 kg, biała',
		category: 'pralki',
		imgSrc: '/images/products/0.png',
		price: {
			amount: 3799,
			currency: 'PLN',
			validFrom: new Date('2022-09-15'),
			validTo: new Date('2022-09-21'),
		},
		specifications: {
			color: 'biały',
			capacityKg: 9,
			dimensions: '55 x 60 x 85 cm',
		},
		features: [productFeatures[0], productFeatures[3]],
		energyClass: 'A',
		installmentPlan: {
			monthlyAmount: 53.31,
			months: 60,
			currency: 'PLN',
		},
		popularity: 0.3,
	},
	{
		id: 1,
		name: 'WW10T654DLH, Pralka EcoBubble™, 10,5 kg, biała',
		category: 'pralki',
		imgSrc: '/images/products/1.png',

		price: {
			amount: 2999,
			currency: 'PLN',
			validFrom: new Date('2022-09-15'),
			validTo: new Date('2022-09-21'),
		},
		specifications: {
			color: 'biały',
			capacityKg: 10.5,
			dimensions: '55 x 60 x 85 cm',
		},
		features: [productFeatures[1], productFeatures[2], productFeatures[3]],
		energyClass: 'B',
		installmentPlan: {
			monthlyAmount: 53.31,
			months: 60,
			currency: 'PLN',
		},
		popularity: 0.2,
	},
	{
		id: 2,
		name: 'WW90T654DLH, Pralka EcoBubble™, 9 kg, biała',
		category: 'pralki',
		imgSrc: '/images/products/2.png',

		price: {
			amount: 3689,
			currency: 'PLN',
			validFrom: new Date('2022-09-15'),
			validTo: new Date('2022-09-21'),
		},
		specifications: {
			color: 'biały',
			capacityKg: 9,
			dimensions: '55 x 60 x 85 cm',
		},
		features: [productFeatures[1], productFeatures[2], productFeatures[3]],
		energyClass: 'C',
		installmentPlan: {
			monthlyAmount: 53.31,
			months: 60,
			currency: 'PLN',
		},
		popularity: 0.8,
	},
	{
		id: 3,
		name: 'WW90T754ABT, Pralka QuickDrive™, 9 kg, biała',
		category: 'pralki',
		imgSrc: '/images/products/3.png',

		price: {
			amount: 3099,
			currency: 'PLN',
			validFrom: new Date('2022-09-15'),
			validTo: new Date('2022-09-21'),
		},
		specifications: {
			color: 'biały',
			capacityKg: 9,
			dimensions: '55 x 60 x 85 cm',
		},
		features: [productFeatures[0], productFeatures[3]],
		energyClass: 'D',
		installmentPlan: {
			monthlyAmount: 53.31,
			months: 60,
			currency: 'PLN',
		},
		popularity: 0.4,
	},
	{
		id: 4,
		name: 'WW10T654DLH, Pralka EcoBubble™, 10,5 kg, biała',
		category: 'pralki',
		imgSrc: '/images/products/4.png',

		price: {
			amount: 3199,
			currency: 'PLN',
			validFrom: new Date('2022-09-15'),
			validTo: new Date('2022-09-21'),
		},
		specifications: {
			color: 'biały',
			capacityKg: 10.5,
			dimensions: '55 x 60 x 85 cm',
		},
		features: [productFeatures[3]],
		energyClass: 'E',
		installmentPlan: {
			monthlyAmount: 53.31,
			months: 60,
			currency: 'PLN',
		},
		popularity: 0.4,
	},
	{
		id: 5,
		name: 'WW90T654DLH, Pralka EcoBubble™, 8 kg, biała',
		category: 'pralki',
		imgSrc: '/images/products/5.png',

		price: {
			amount: 2999,
			currency: 'PLN',
			validFrom: new Date('2022-09-15'),
			validTo: new Date('2022-09-21'),
		},
		specifications: {
			color: 'biały',
			capacityKg: 8,
			dimensions: '55 x 60 x 85 cm',
		},
		features: [...productFeatures],
		energyClass: 'F',
		installmentPlan: {
			monthlyAmount: 53.31,
			months: 60,
			currency: 'PLN',
		},
		popularity: 0.3,
	},
	{
		id: 6,
		name: 'WW90T754ABT, Pralka QuickDrive™, 9 kg, biała',
		category: 'pralki',
		imgSrc: '/images/products/0.png',

		price: {
			amount: 3799,
			currency: 'PLN',
			validFrom: new Date('2022-09-15'),
			validTo: new Date('2022-09-21'),
		},
		specifications: {
			color: 'biały',
			capacityKg: 9,
			dimensions: '55 x 60 x 85 cm',
		},
		features: [productFeatures[0], productFeatures[3]],
		energyClass: 'A',
		installmentPlan: {
			monthlyAmount: 53.31,
			months: 60,
			currency: 'PLN',
		},
		popularity: 0.3,
	},
	{
		id: 7,
		name: 'WW10T654DLH, Pralka EcoBubble™, 10,5 kg, biała',
		category: 'pralki',
		imgSrc: '/images/products/1.png',

		price: {
			amount: 2999,
			currency: 'PLN',
			validFrom: new Date('2022-09-15'),
			validTo: new Date('2022-09-21'),
		},
		specifications: {
			color: 'biały',
			capacityKg: 10.5,
			dimensions: '55 x 60 x 85 cm',
		},
		features: [productFeatures[1], productFeatures[2], productFeatures[3]],
		energyClass: 'B',
		installmentPlan: {
			monthlyAmount: 53.31,
			months: 60,
			currency: 'PLN',
		},
		popularity: 0.2,
	},
	{
		id: 8,
		name: 'WW90T654DLH, Pralka EcoBubble™, 9 kg, biała',
		category: 'pralki',
		imgSrc: '/images/products/2.png',

		price: {
			amount: 3689,
			currency: 'PLN',
			validFrom: new Date('2022-09-15'),
			validTo: new Date('2022-09-21'),
		},
		specifications: {
			color: 'biały',
			capacityKg: 9,
			dimensions: '55 x 60 x 85 cm',
		},
		features: [productFeatures[1], productFeatures[2], productFeatures[3]],
		energyClass: 'C',
		installmentPlan: {
			monthlyAmount: 53.31,
			months: 60,
			currency: 'PLN',
		},
		popularity: 0.8,
	},
	{
		id: 9,
		name: 'WW90T754ABT, Pralka QuickDrive™, 9 kg, biała',
		category: 'pralki',
		imgSrc: '/images/products/3.png',

		price: {
			amount: 3099,
			currency: 'PLN',
			validFrom: new Date('2022-09-15'),
			validTo: new Date('2022-09-21'),
		},
		specifications: {
			color: 'biały',
			capacityKg: 9,
			dimensions: '55 x 60 x 85 cm',
		},
		features: [productFeatures[0], productFeatures[3]],
		energyClass: 'D',
		installmentPlan: {
			monthlyAmount: 53.31,
			months: 60,
			currency: 'PLN',
		},
		popularity: 0.4,
	},
	{
		id: 10,
		name: 'WW10T654DLH, Pralka EcoBubble™, 10,5 kg, biała',
		category: 'pralki',
		imgSrc: '/images/products/4.png',

		price: {
			amount: 3199,
			currency: 'PLN',
			validFrom: new Date('2022-09-15'),
			validTo: new Date('2022-09-21'),
		},
		specifications: {
			color: 'biały',
			capacityKg: 10.5,
			dimensions: '55 x 60 x 85 cm',
		},
		features: [productFeatures[3]],
		energyClass: 'E',
		installmentPlan: {
			monthlyAmount: 53.31,
			months: 60,
			currency: 'PLN',
		},
		popularity: 0.4,
	},
];
