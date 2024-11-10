import { ProductCardButton } from '@/components/product-card/ProductCardButton';
import { ProductCardEnergyLabel } from '@/components/product-card/ProductCardEnergyLabel';
import { ProductCardHeader } from '@/components/product-card/ProductCardHeader';
import { ProductCardPriceSection } from '@/components/product-card/ProductCardPriceSection';
import { ProductCardSpecs } from '@/components/product-card/ProductCardSpecs';
import { addToSelectedProducts } from '@/features/products/productsSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { type Product } from '@/shared/types';

type ProductCardProps = {
	product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
	const dispatch = useAppDispatch();
	const selectedProductIds = useAppSelector((state) => state.products.selectedProductIds);
	const isProductSelected = selectedProductIds.includes(product.id);

	const handleSelectProduct = () => {
		dispatch(addToSelectedProducts(product.id));
	};

	return (
		<div className="flex h-full flex-col rounded-2xl bg-white px-6 py-4">
			<ProductCardHeader productName={product.name} productImgSrc={product.imgSrc} />
			<section className="flex-grow text-xs">
				<ProductCardSpecs productData={product} />
				<ProductCardEnergyLabel energyClass={product.energyClass} />
			</section>
			<ProductCardPriceSection price={product.price} installmentPlan={product.installmentPlan} />
			<ProductCardButton isProductSelected={isProductSelected} onChange={handleSelectProduct} />
		</div>
	);
};
