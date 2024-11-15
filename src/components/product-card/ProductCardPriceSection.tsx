import { ProductCardPrice } from '@/components/product-card/ProductCardPrice';
import { ProductCardPriceInstallments } from '@/components/product-card/ProductCardPriceInstallments';
import { ProductCardPriceValidDate } from '@/components/product-card/ProductCardPriceValidDate';
import { type InstallmentPlan, type ProductPrice } from '@/shared/types';

type ProductCardPriceSectionProps = {
	price: ProductPrice;
	installmentPlan?: InstallmentPlan;
};

export const ProductCardPriceSection = ({
	price,
	installmentPlan,
}: ProductCardPriceSectionProps) => {
	return (
		<section aria-label="Informacje cenowe" className="text-xs">
			<ProductCardPriceValidDate price={price} />
			<ProductCardPrice price={price} />
			{installmentPlan ? <ProductCardPriceInstallments installmentPlan={installmentPlan} /> : ''}
		</section>
	);
};
