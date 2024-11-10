export type Category = 'pralki' | 'lodówki' | 'telewizory';

export type EnergyClass = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export type Currency = 'PLN' | 'EUR' | 'USD';

export type MeasureUnit = 'cm' | 'mm';

export type ProductDimensions =
	`${string | number} x ${string | number} x ${string | number} ${MeasureUnit}`;

export type SpecificationValue = string | number | boolean;

export type Product = {
	id: number;
	name: string;
	category: Category;
	imgSrc: string;
	price: ProductPrice;
	specifications: BaseProductSpec;
	features?: ProductFeature[];
	energyClass: EnergyClass;
	installmentPlan?: InstallmentPlan;
	popularity: number;
};

export type BaseProductSpec = {
	dimensions?: ProductDimensions;
} & Record<string, SpecificationValue>;

export type ProductFeature = {
	id: number;
	name: string;
};

export type ProductPrice = {
	amount: number;
	currency: Currency;
	validFrom?: string;
	validTo?: string;
};

export type InstallmentPlan = {
	monthlyAmount: number;
	months: number;
	currency: string;
};

export type FilterBy = {
	id: string;
	label: string;
	options: Array<{ value: string; label: string }>;
};

export type SortBy = FilterBy;

export type CategorySpecAttribute = {
	id: string;
	label: string;
};

export type CategoryConfig = {
	sorting: SortBy;
	filters: FilterBy[];
	specificationAttributes: CategorySpecAttribute[];
	productFeatures: ProductFeature[];
};
