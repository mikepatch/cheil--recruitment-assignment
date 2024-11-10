import { LoadMoreButton } from '@/components/product-listing/LoadMoreButton';
import { ProductList } from '@/components/product-listing/ProductList';
import { ResultsCounter } from '@/components/product-listing/ResultsCounter';
import { useProducts } from '@/hooks/useProducts';
import { type Product } from '@/types';
import { useEffect, useState } from 'react';

export const ProductListing = () => {
	const { products } = useProducts();
	const initialProductsCount = 6;
	const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
	const [visibleProductsCount, setVisibleProductsCount] = useState<number>(initialProductsCount);

	const areMoreProducts = displayedProducts.length < products.length;

	useEffect(() => {
		setDisplayedProducts(products.slice(0, visibleProductsCount));
	}, [products, visibleProductsCount]);

	const handleLoadMore = () => {
		setVisibleProductsCount((prevCount) => prevCount + initialProductsCount);

		setDisplayedProducts(products.slice(0, visibleProductsCount + initialProductsCount));
	};

	return (
		<section className="flex flex-col">
			<ResultsCounter resultsCount={products.length} />
			<ProductList products={displayedProducts} />
			{areMoreProducts ? <LoadMoreButton onClick={handleLoadMore} /> : ''}
		</section>
	);
};
