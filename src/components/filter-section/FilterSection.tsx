import { Filter } from '@/components/filter-section/Filter';
import { SearchBar } from '@/components/filter-section/SearchBar';
import { Sort } from '@/components/filter-section/Sort';
import { CATEGORY_CONFIG, CURRENT_CATEGORY } from '@/constants';
import { useProducts } from '@/hooks/useProducts';

export const FilterSection = () => {
	const { setSearchQuery, setSorting, setActiveFilters } = useProducts();
	const categoryConfig = CATEGORY_CONFIG[CURRENT_CATEGORY];

	if (!categoryConfig) return;

	return (
		<aside>
			<form>
				<div role="search">
					<SearchBar onChange={setSearchQuery} />
				</div>
				<div aria-label="Sortowanie">
					<Sort sortBy={categoryConfig.sorting} onChange={setSorting} />
				</div>
				<div role="group" aria-label="Filtrowanie">
					{categoryConfig.filters.map((filter) => (
						<Filter key={`filter-${filter.id}`} filterBy={filter} onChange={setActiveFilters} />
					))}
				</div>
			</form>
		</aside>
	);
};
