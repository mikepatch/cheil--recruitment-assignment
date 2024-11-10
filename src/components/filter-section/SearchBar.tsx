import { useDebounce } from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';

type SearchBarProps = {
	onChange: (value: string) => void;
};

export const SearchBar = ({ onChange }: SearchBarProps) => {
	const [searchTerm, setSearchTerm] = useState('');
	const debouncedSearchTerm = useDebounce(searchTerm);

	useEffect(() => {
		onChange(debouncedSearchTerm);
	}, [debouncedSearchTerm, onChange]);

	return (
		<div className="pb-2 pt-6 text-center" role="search">
			<label className="sr-only" htmlFor="product-search">
				Wyszukaj urządzenie
			</label>
			<input
				type="text"
				id="product-search"
				placeholder="Szukaj..."
				className="w-64 rounded-sm p-2 px-3 text-sm placeholder-black shadow-sm"
				onChange={(e) => setSearchTerm(e.target.value)}
			/>
		</div>
	);
};
