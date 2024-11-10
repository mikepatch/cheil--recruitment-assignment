import { LoadMoreButton } from '@/components/product-listing/LoadMoreButton';
import { ProductList } from '@/components/product-listing/ProductList';
import { ResultsCounter } from '@/components/product-listing/ResultsCounter';
import { selectFilteredProducts } from '@/features/products/productsSelectors';
import { useAppSelector } from '@/hooks/useRedux';
import { type Product } from '@/shared/types';
import { useEffect, useState } from 'react';

export const ProductListing = () => {
	const products = useAppSelector(selectFilteredProducts);
	const initialProductsCount = 6;
	const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);
	const [visibleProductsCount, setVisibleProductsCount] = useState<number>(initialProductsCount);
	const [isLoading, setIsLoading] = useState(true);

	const areMoreProducts = displayedProducts.length < products.length;

	// I decided to simulate the fetching data from server to demonstrate skeletons.
	useEffect(() => {
		setIsLoading(true);

		const timer = setTimeout(() => {
			setDisplayedProducts(products.slice(0, visibleProductsCount));
			setIsLoading(false);
		}, 800);

		return () => clearTimeout(timer);
	}, []);

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
			<ProductList products={displayedProducts} isLoading={isLoading} />
			{areMoreProducts ? <LoadMoreButton onClick={handleLoadMore} /> : ''}
		</section>
	);
};
