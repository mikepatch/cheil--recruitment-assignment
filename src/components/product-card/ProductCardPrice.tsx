import { type ProductPrice } from '@/shared/types';

type PriceProps = {
	price: ProductPrice;
};

export const ProductCardPrice = ({ price }: PriceProps) => {
	const formattedAmount = new Intl.NumberFormat('pl-PL', {
		style: 'currency',
		currency: price.currency,
		minimumFractionDigits: 2,
	}).format(price.amount);

	const [amount, decimals, currency] = formattedAmount.split(/[\s,]/);
	const [firstDigit, ...restDigits] = amount.split('');

	return (
		<div className="mt-1 flex items-start font-bold leading-none">
			<span className="sr-only">Cena:</span>
			<span className="text-[40px] font-bold tracking-tighter">
				{firstDigit} {restDigits}
			</span>
			<div className="ml-2 flex flex-col text-right">
				<span className="translate-y-1 transform text-sm">{decimals}</span>
				<span className="text-sm">{currency}</span>
			</div>
		</div>
	);
};
