import { CURRENT_CATEGORY } from '@/shared/constants';

export const Header = () => {
	return (
		<header className="py-6 text-center">
			<h1 className="sr-only">Samsung – {CURRENT_CATEGORY}</h1>
			<h2 className="text-3xl font-bold md:text-[40px]">Wybierz urządzenie</h2>
		</header>
	);
};
