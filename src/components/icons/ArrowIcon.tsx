type ArrowIconProps = {
	color?: 'accent' | 'gray';
	size?: 'sm' | 'lg';
};

export const ArrowIcon = ({ color = 'gray', size = 'lg' }: ArrowIconProps) => {
	const sizePx = size === 'lg' ? '13' : '7';
	const colorClass = color === 'gray' ? 'fill-gray' : 'fill-accent';

	return (
		<svg
			width={sizePx}
			height={sizePx}
			viewBox="0 0 13 11"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M6.5 10.5L12.1292 0.75H0.870835L6.5 10.5Z" className={colorClass} />
		</svg>
	);
};
