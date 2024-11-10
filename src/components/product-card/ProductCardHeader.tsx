import { type Product } from '@/shared/types';

type ProductCardHeaderProps = {
	productName: Product['name'];
	productImgSrc: Product['imgSrc'];
};

export const ProductCardHeader = ({ productName, productImgSrc }: ProductCardHeaderProps) => {
	return (
		<header>
			<figure className="flex justify-center">
				<img width={200} height={200} src={productImgSrc} alt={productName} />
			</figure>
			<h3 className="mb-6 mt-2 text-lg font-bold">{productName}</h3>
		</header>
	);
};
