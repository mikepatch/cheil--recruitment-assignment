import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PRODUCTS } from '@/shared/constants';
import { Product } from '@/shared/types';

type ProductsState = {
	products: Product[];
	searchQuery: string;
	activeFilters: Record<string, string>;
	sorting: { by: string; direction: 'asc' | 'desc' };
	selectedProductIds: number[];
};

const initialState: ProductsState = {
	products: PRODUCTS,
	searchQuery: '',
	activeFilters: {},
	sorting: {
		by: 'default',
		direction: 'asc',
	},
	selectedProductIds: [],
};

const productsSlice = createSlice({
	name: 'products',
	initialState,
	reducers: {
		setSearchQuery: (state, action: PayloadAction<string>) => {
			state.searchQuery = action.payload;
		},
		setActiveFilters: (state, action: PayloadAction<{ value: string; filterId: string }>) => {
			const { value, filterId } = action.payload;
			state.activeFilters[filterId] = value;
		},
		setSorting: (state, action: PayloadAction<string>) => {
			if (action.payload === 'default') {
				state.sorting = {
					by: 'default',
					direction: 'asc',
				};
				return;
			}

			const [field, direction] = action.payload.split('-');
			state.sorting = {
				by: field,
				direction: (direction as 'asc' | 'desc') || 'asc',
			};
		},
		addToSelectedProducts: (state, action: PayloadAction<number>) => {
			const productId = action.payload;
			const index = state.selectedProductIds.indexOf(productId);

			if (index === -1) {
				state.selectedProductIds.push(productId);
			} else {
				state.selectedProductIds.splice(index, 1);
			}
		},
	},
});

export const { setSearchQuery, setActiveFilters, setSorting, addToSelectedProducts } =
	productsSlice.actions;

export default productsSlice.reducer;
