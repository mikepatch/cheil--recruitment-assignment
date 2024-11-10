import { ProductCardSkeleton } from '@/components/product-card/ProductCardSkeleton';

type ProductListSkeletonProps = {
	count?: number;
};

export const ProductListSkeleton = ({ count = 6 }: ProductListSkeletonProps) => {
	return (
		<ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			{[...Array(count)].map((_, index) => (
				<li key={`product-skeleton-${index}`}>
					<ProductCardSkeleton />
				</li>
			))}
		</ul>
	);
};
