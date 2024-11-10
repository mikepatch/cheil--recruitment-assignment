type ProductCardEnergyLabelProps = {
	energyClass: string;
};

export const ProductCardEnergyLabel = ({ energyClass }: ProductCardEnergyLabelProps) => {
	return (
		<section aria-label="Klasa energetyczna" className="flex items-center gap-2 py-4">
			<p className="text-gray-400">Klasa energetyczna</p>
			<img
				width={49}
				height={18}
				src={`/images/energy-labels/${energyClass}.svg`}
				alt={`Etykieta klasy energetycznej – ${energyClass}`}
				loading="lazy"
			/>
		</section>
	);
};
