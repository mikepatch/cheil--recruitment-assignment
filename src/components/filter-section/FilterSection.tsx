import { CustomSelect } from '@/components/filter-section/CustomSelect';
import { SearchBar } from '@/components/filter-section/SearchBar';

import { CATEGORY_CONFIG, CURRENT_CATEGORY } from '@/shared/constants';
import { useProducts } from '@/hooks/useProducts';

export const FilterSection = () => {
	const { setSearchQuery, setSorting, setActiveFilters } = useProducts();
	const categoryConfig = CATEGORY_CONFIG[CURRENT_CATEGORY];

	if (!categoryConfig) return;

	const { sorting, filters } = categoryConfig;

	return (
		<aside>
			<form>
				<SearchBar onChange={setSearchQuery} />
				<div role="group" className="gap-4 md:flex">
					<CustomSelect
						id={sorting.id}
						label={sorting.label}
						options={sorting.options}
						onChange={setSorting}
					/>
					{filters.map((filter) => (
						<CustomSelect
							key={`filter-${filter.id}`}
							id={filter.id}
							label={filter.label}
							options={filter.options}
							onChange={setActiveFilters}
						/>
					))}
				</div>
			</form>
		</aside>
	);
};
