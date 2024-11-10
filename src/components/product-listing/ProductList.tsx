import { ProductCard } from '@/components/product-card/ProductCard';
import { ProductListSkeleton } from '@/components/product-listing/ProductListSkeleton';
import { type Product } from '@/shared/types';

type ProductListProps = {
	products: Product[];
	isLoading?: boolean;
};

export const ProductList = ({ products, isLoading }: ProductListProps) => {
	if (isLoading) {
		return <ProductListSkeleton />;
	}

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
