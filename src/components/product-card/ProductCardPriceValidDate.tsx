import { type ProductPrice } from '@/types';

type ProductCardPriceValidDateProps = {
	price: ProductPrice;
};

export const ProductCardPriceValidDate = ({ price }: ProductCardPriceValidDateProps) => {
	const validFrom = price.validFrom ? new Date(price.validFrom).toLocaleDateString('pl-PL') : '';
    const validTo = price.validTo ? new Date(price.validTo).toLocaleDateString('pl-PL') : '';
    
	return (
		<p className="text-gray-400">
			Cena obowiązuje: <span>{validFrom}</span> - <span>{validTo}</span>
		</p>
	);
};
