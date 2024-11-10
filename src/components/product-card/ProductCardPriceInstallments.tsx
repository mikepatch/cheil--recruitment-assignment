import { type InstallmentPlan } from '@/shared/types';

type ProductCardPriceInstallmentsProps = {
	installmentPlan: InstallmentPlan;
};

export const ProductCardPriceInstallments = ({
	installmentPlan,
}: ProductCardPriceInstallmentsProps) => {
	const formattedMonthlyAmount = new Intl.NumberFormat('pl-PL', {
		style: 'currency',
		currency: installmentPlan.currency,
		minimumFractionDigits: 2,
	}).format(installmentPlan.monthlyAmount);

	return (
		<p aria-label="Plan ratalny" className="py-4 text-base font-bold text-gray-600">
			<span>{formattedMonthlyAmount}</span> x <span>{installmentPlan.months}</span> rat
		</p>
	);
};
