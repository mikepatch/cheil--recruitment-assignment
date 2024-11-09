import { type FilterBy } from '@/types';

type FilterProps = {
	filterBy: FilterBy;
	onChange: (filterId: string, value: string) => void;
};

export const Filter = ({ filterBy, onChange }: FilterProps) => {
	return (
		<div>
			<label htmlFor={filterBy.id}>{filterBy.label}</label>
			<select id={filterBy.id} onChange={(e) => onChange(filterBy.id, e.target.value)}>
				{filterBy.options.map((option) => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	);
};
