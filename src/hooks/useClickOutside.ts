import { useEffect } from 'react';

export const useClickOutside = (ref: React.RefObject<HTMLElement>, onClickOutside: () => void) => {
	useEffect(() => {
		const handleClickOutside = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				onClickOutside();
			}
		};
		const handleEscapeClick = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				onClickOutside();
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		document.addEventListener('keydown', handleEscapeClick);

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
			document.removeEventListener('keydown', handleEscapeClick);
		};
	}, [ref, onClickOutside]);
};
