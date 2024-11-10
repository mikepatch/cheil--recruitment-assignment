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
				onChange={(e) => onChange(e.target.value)}
			/>
		</>
	);
};
