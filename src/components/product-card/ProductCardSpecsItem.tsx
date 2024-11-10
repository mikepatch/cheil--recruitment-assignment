import { type SpecificationValue } from '@/types';

type ProductCardSpecsItemProps = {
	attributeKey: string;
	attributeValue: SpecificationValue;
};

export const ProductCardSpecsItem = ({
	attributeKey,
	attributeValue,
}: ProductCardSpecsItemProps) => {
	return (
		<li>
			<span className="text-gray-400">{attributeKey}</span>
			<span className="font-bold">{attributeValue}</span>
		</li>
	);
};
