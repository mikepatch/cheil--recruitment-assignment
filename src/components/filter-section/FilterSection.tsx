import { CustomSelect } from '@/components/filter-section/CustomSelect';
import { SearchBar } from '@/components/filter-section/SearchBar';

import { CATEGORY_CONFIG, CURRENT_CATEGORY } from '@/shared/constants';
import { useAppDispatch } from '@/hooks/useRedux';
import { setActiveFilters, setSearchQuery, setSorting } from '@/features/products/productsSlice';

export const FilterSection = () => {
	const dispatch = useAppDispatch();
	const categoryConfig = CATEGORY_CONFIG[CURRENT_CATEGORY];

	if (!categoryConfig) return;

	const { sorting, filters } = categoryConfig;

	const handleSearchQueryChange = (value: string) => {
		dispatch(setSearchQuery(value));
	};

	const handleSortChange = (value: string) => {
		dispatch(setSorting(value));
	};

	const handleFilterChange = (value: string, filterId?: string) => {
		if (!filterId) return;

		dispatch(setActiveFilters({ value, filterId }));
	};

	return (
		<aside>
			<form>
				<SearchBar onChange={handleSearchQueryChange} />
				<div role="group" className="gap-4 md:flex">
					<CustomSelect
						id={sorting.id}
						label={sorting.label}
						options={sorting.options}
						onChange={handleSortChange}
					/>
					{filters.map((filter) => (
						<CustomSelect
							key={`filter-${filter.id}`}
							id={filter.id}
							label={filter.label}
							options={filter.options}
							onChange={handleFilterChange}
						/>
					))}
				</div>
			</form>
		</aside>
	);
};
