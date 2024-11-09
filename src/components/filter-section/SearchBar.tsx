type SearchBarProps = {
	onChange: (value: string) => void;
};

export const SearchBar = ({ onChange }: SearchBarProps) => {
	return (
		<>
			<label className="visually-hidden" htmlFor="product-search">
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
