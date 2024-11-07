export type Category = 'Pralki';

export type EnergyClass = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G';

export type Product = {
	id: string;
	name: string;
	category: Category;
	specifications: ProductSpecs;
	price: Price;
	energyClass: EnergyClass;
	installmentPlan?: Installment;
};

export type ProductSpecs = {
	capacityKg: number;
	dimensions: Dimensions;
	features: string[];
	color: string;
};

export type Dimensions = {
	depth: number;
	width: number;
	height: number;
};

export type Price = {
	amount: number;
	currency: string;
	validFrom?: Date;
	validTo?: Date;
};

export type Installment = {
	monthlyAmount: number;
	months: number;
	currency: string;
};
