import { ArrowIcon } from '@/components/icons/ArrowIcon';

type LoadMoreButtonProps = {
	onClick: () => void;
};

export const LoadMoreButton = ({ onClick }: LoadMoreButtonProps) => {
	return (
		<button
			className="text-brand-accent mt-6 flex items-center gap-2 self-center text-lg font-bold"
			onClick={onClick}
		>
			<span>Pokaż więcej</span>
			<figure>
				<ArrowIcon color="accent" size="sm" />
			</figure>
		</button>
	);
};
