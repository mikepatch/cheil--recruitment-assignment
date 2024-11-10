import { ProductCard } from '@/components/product-card/ProductCard';
import { type Product } from '@/types';

type ProductListProps = {
	products: Product[];
};

export const ProductList = ({ products }: ProductListProps) => {
	return (
		<ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{products.map((product) => (
				<li key={`product-${product.id}`}>
					<ProductCard product={product} />
				</li>
			))}
		</ul>
	);
};
