export const ProductCardSkeleton = () => {
	return (
		<div className="flex h-full flex-col rounded-2xl bg-white px-6 py-4">
			<header>
				<div className="flex justify-center">
					<div className="h-[200px] w-[200px] animate-pulse rounded-lg bg-gray-200" />
				</div>
				<div className="mb-6 mt-2 h-7 w-3/4 animate-pulse rounded bg-gray-200" />
			</header>
			<section className="flex-grow text-xs">
				<ul className="flex flex-col gap-1">
					{[1, 2, 3].map((index) => (
						<li key={index} className="h-4 w-full animate-pulse rounded bg-gray-200" />
					))}
				</ul>
				<div className="flex items-center gap-2 py-4">
					<div className="h-4 w-32 animate-pulse rounded bg-gray-200" />
					<div className="h-[18px] w-[49px] animate-pulse rounded bg-gray-200" />
				</div>
			</section>
			<section className="text-xs">
				<div className="h-4 w-48 animate-pulse rounded bg-gray-200" />
				<div className="mt-1 h-10 w-32 animate-pulse rounded bg-gray-200" />
				<div className="py-4">
					<div className="h-6 w-40 animate-pulse rounded bg-gray-200" />
				</div>
			</section>
			<div className="self-center">
				<div className="h-9 w-32 animate-pulse rounded-full bg-gray-200" />
			</div>
		</div>
	);
};
