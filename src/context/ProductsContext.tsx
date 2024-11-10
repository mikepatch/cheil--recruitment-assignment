import { createContext, useState, ReactNode, useMemo } from 'react';
import { PRODUCTS, CATEGORY_CONFIG, CURRENT_CATEGORY } from '@/constants';
import { type Product } from '@/types';

type ProductsContextType = {
	products: Product[];
	searchQuery: string;
	setSearchQuery: (query: string) => void;
	activeFilters: Record<string, string>;
	setActiveFilters: (value: string, filterId?: string) => void;
	sorting: { by: string; direction: 'asc' | 'desc' };
	setSorting: (value: string) => void;
	selectedProductIds: number[];
	setSelectedProductIds: (productId: number) => void;
};

export const ProductsContext = createContext<ProductsContextType | undefined>(undefined);

export const ProductsProvider = ({ children }: { children: ReactNode }) => {
	const [searchQuery, setSearchQuery] = useState<string>('');
	const [activeFilters, setActiveFilters] = useState<Record<string, string>>({});
	const [sorting, setSorting] = useState<{ by: string; direction: 'asc' | 'desc' }>({
		by: 'default',
		direction: 'asc',
	});
	const [selectedProductIds, setSelectedProductIds] = useState<number[]>([]);

	const filteredProducts = useMemo(() => {
		let products = PRODUCTS.filter((product) => {
			const matchesSearchQuery = product.name
				.toLowerCase()
				.trim()
				.includes(searchQuery.toLowerCase().trim());

			const matchesFilters = Object.entries(activeFilters).every(([filterId, value]) => {
				if (value === 'all') return true;

				const filterConfig = CATEGORY_CONFIG[CURRENT_CATEGORY]?.filters.find(
					(filter) => filter.id === filterId,
				);
				if (!filterConfig) return true;

				switch (filterId) {
					case 'features':
						return product.features?.some((feature) => feature.id.toString() === value);
					case 'energyClass':
						return product.energyClass === value;
					case 'capacity':
						return product.specifications.capacityKg?.toString() === value;
					default:
						if (filterConfig.options.some((option) => option.value === value)) {
							return (product as any)[filterId] === value;
						}
						return true;
				}
			});

			return matchesSearchQuery && matchesFilters;
		});

		if (sorting.by !== 'default') {
			products = [...products].sort((a, b) => {
				switch (sorting.by) {
					case 'price':
						return sorting.direction === 'asc'
							? a.price.amount - b.price.amount
							: b.price.amount - a.price.amount;
					case 'popularity':
						return sorting.direction === 'asc'
							? a.popularity - b.popularity
							: b.popularity - a.popularity;
					case 'capacity':
						return sorting.direction === 'asc'
							? Number(a.specifications.capacityKg || 0) - Number(b.specifications.capacityKg || 0)
							: Number(b.specifications.capacityKg || 0) - Number(a.specifications.capacityKg || 0);
					default:
						return 0;
				}
			});
		}

		return products;
	}, [PRODUCTS, searchQuery, activeFilters, sorting]);

	const handleFilterChange = (value: string, filterId?: string) => {
		if (!filterId) return;

		setActiveFilters((prev) => ({
			...prev,
			[filterId]: value,
		}));
	};

	const handleSortChange = (value: string) => {
		if (value === 'default') {
			setSorting({
				by: 'default',
				direction: 'asc',
			});

			return;
		}

		const [field, direction] = value.split('-');
		setSorting({
			by: field,
			direction: (direction as 'asc' | 'desc') || 'asc',
		});
	};

	const handleSelectProductId = (productId: number) => {
		const isProductIdSelected = selectedProductIds.find((id) => id === productId);

		if (isProductIdSelected) {
			setSelectedProductIds((prev) => prev.filter((id) => id !== productId));

			return;
		}

		setSelectedProductIds((prev) => [...prev, productId]);
	};

	const value = {
		products: filteredProducts,
		searchQuery,
		setSearchQuery,
		activeFilters,
		setActiveFilters: handleFilterChange,
		sorting,
		setSorting: handleSortChange,
		selectedProductIds,
		setSelectedProductIds: handleSelectProductId,
	};

	return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>;
};
