import { CATEGORY_CONFIG } from '@/constants';
import { useProducts } from '@/hooks/useProducts';
import { type Product } from '@/types';

type ProductCardProps = {
	product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
	const { id, name, category, price, specifications, features, energyClass, installmentPlan } =
		product;
	const { selectedProductIds, setSelectedProductIds } = useProducts();
	const isProductSelected = selectedProductIds.find((selectedId) => selectedId === id);

	return (
		<>
			<header>
				<img src={`/images/products/${id}.png`} alt={name} />
				<h3>{name}</h3>
			</header>
			<div>
				<section aria-label="Specyfikacja produktu">
					<ul>
						{Object.keys(specifications).map((attribute, index) => (
							<li key={`attribute-${index}`}>
								{CATEGORY_CONFIG[category]?.specificationAttributes[index].label}:{' '}
								{specifications[attribute]}
							</li>
						))}
						{features && features.length > 0 ? (
							<li>Funkcje: {features.map(({ name }) => name).join(', ')}</li>
						) : (
							''
						)}
					</ul>
				</section>
				<section aria-label="Klasa energetyczna">
					<p>Klasa energetyczna</p>
					<img
						src={`/images/energy-labels/${energyClass}.svg`}
						alt={`Etykieta klasy energetycznej – ${energyClass}`}
					/>
				</section>
				<section aria-label="Informacje cenowe">
					<p>
						Cena obowiązuje:{' '}
						{price.validFrom ? new Date(price.validFrom).toLocaleDateString('pl-PL') : ''} -{' '}
						{price.validTo ? new Date(price.validTo).toLocaleDateString('pl-PL') : ''}
					</p>
					<p>
						<span className="sr-only">Cena:</span>
						{new Intl.NumberFormat('pl-PL', {
							style: 'currency',
							currency: price.currency,
							minimumFractionDigits: 2,
						}).format(price.amount)}
					</p>
					<p aria-label="Plan ratalny">
						{installmentPlan
							? new Intl.NumberFormat('pl-PL', {
									style: 'currency',
									currency: installmentPlan.currency,
									minimumFractionDigits: 2,
								}).format(installmentPlan.monthlyAmount) +
								' x ' +
								installmentPlan.months +
								' rat'
							: ''}
					</p>
				</section>
				<button
					aria-pressed={isProductSelected ? 'true' : 'false'}
					onClick={() => setSelectedProductIds(id)}
				>
					{isProductSelected ? 'Wybrane' : 'Wybierz'}
				</button>
			</div>
		</>
	);
};
