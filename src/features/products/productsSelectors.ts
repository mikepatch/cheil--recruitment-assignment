import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { CATEGORY_CONFIG, CURRENT_CATEGORY } from '@/shared/constants';

export const selectFilteredProducts = createSelector(
	(state: RootState) => state.products,
	(productsState) => {
		const { products, searchQuery, activeFilters, sorting } = productsState;

		let filteredProducts = products.filter((product) => {
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
			filteredProducts = [...filteredProducts].sort((a, b) => {
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

		return filteredProducts;
	},
);
