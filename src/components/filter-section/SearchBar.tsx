type SearchBarProps = {
	onChange: (value: string) => void;
};

export const SearchBar = ({ onChange }: SearchBarProps) => {
	return (
		<>
			<label className="sr-only" htmlFor="product-search">
				Wyszukaj urządzenie
			</label>
			<input
				type="text"
				id="product-search"
				placeholder="Szukaj..."
				className="w-64 rounded-sm p-2 px-3 text-sm placeholder-black shadow-sm"
				onChange={(e) => onChange(e.target.value)}
			/>
		</>
	);
};
