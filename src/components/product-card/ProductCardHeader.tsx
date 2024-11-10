type ProductCardHeaderProps = {
	productId: number;
	productName: string;
};

export const ProductCardHeader = ({ productId, productName }: ProductCardHeaderProps) => {
	return (
		<header>
			<figure className="flex justify-center">
				<img width={200} height={200} src={`/images/products/${productId}.png`} alt={productName} />
			</figure>
			<h3 className="mb-6 mt-2 text-lg font-bold">{productName}</h3>
		</header>
	);
};
