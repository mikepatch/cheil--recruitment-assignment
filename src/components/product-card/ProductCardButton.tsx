type ProductCardButtonProps = {
	isProductSelected: boolean;
	onChange: () => void;
};

export const ProductCardButton = ({ isProductSelected, onChange }: ProductCardButtonProps) => {
	return (
		<button
			aria-pressed={isProductSelected ? 'true' : 'false'}
			className={`bg-brand-primary hover:bg-brand-secondary self-center rounded-full px-12 py-2 text-sm font-bold uppercase text-white transition-colors ${isProductSelected ? 'bg-brand-secondary' : ''}`}
			onClick={onChange}
		>
			{isProductSelected ? 'Wybrane' : 'Wybierz'}
		</button>
	);
};
