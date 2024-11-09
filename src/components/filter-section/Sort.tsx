import { type SortBy } from '@/types';

type SortProps = {
	sortBy: SortBy;
	onChange: (value: string) => void;
};

export const Sort = ({ sortBy, onChange }: SortProps) => {
	return (
		<>
			<label htmlFor="sort">Sortuj po</label>
			<select id="sort" name="sort" onChange={(e) => onChange(e.target.value)}>
				{sortBy.options.map((option) => (
					<option key={`sort-option-${option.value}`} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</>
	);
};
