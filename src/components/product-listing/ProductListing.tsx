import { ArrowIcon } from '@/components/icons/ArrowIcon';
import { ProductCard } from '@/components/product-listing/ProductCard';
import { useProducts } from '@/hooks/useProducts';

export const ProductListing = () => {
	const { products } = useProducts();

	return (
		<section>
			<p aria-live="polite" role="status">
				Liczba wyników: {products.length}
			</p>
			<ul>
				{products.map((product) => (
					<li key={`product-${product.id}`}>
						<ProductCard product={product} />
					</li>
				))}
			</ul>
			<button>
				Pokaż więcej <ArrowIcon color="accent" size="sm" />
			</button>
		</section>
	);
};
