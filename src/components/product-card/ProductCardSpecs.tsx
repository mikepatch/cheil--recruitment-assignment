import { ProductCardSpecsItem } from '@/components/product-card/ProductCardSpecsItem';
import { CATEGORY_CONFIG } from '@/shared/constants';
import { type Product } from '@/shared/types';

type ProductCardSpecsProps = {
	productData: Product;
};

export const ProductCardSpecs = ({ productData }: ProductCardSpecsProps) => {
	const { category, specifications, features } = productData;

	const getAttributeLabel = (index: number) =>
		CATEGORY_CONFIG[category]?.specificationAttributes[index].label;
	const getFeaturesValue = features?.map(({ name }) => name).join(', ');

	const renderSpecs = () => {
		return Object.keys(specifications).map((attribute, index) => (
			<ProductCardSpecsItem
				key={`attribute-${index}`}
				attributeKey={`${getAttributeLabel(index)}: `}
				attributeValue={specifications[attribute]}
			/>
		));
	};
	const renderFeatures = () => {
		if (!getFeaturesValue || getFeaturesValue.length <= 0) return '';

		return <ProductCardSpecsItem attributeKey="Funkcje: " attributeValue={getFeaturesValue} />;
	};

	return (
		<ul className="flex flex-col gap-px" aria-label="Specyfikacja produktu">
			{renderSpecs()}
			{renderFeatures()}
		</ul>
	);
};
