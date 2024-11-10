import { ArrowIcon } from '@/components/icons/ArrowIcon';
import { useClickOutside } from '@/hooks/useClickOutside';
import { FilterBy } from '@/types';
import { useRef, useState } from 'react';

type CustomSelectProps = {
	id: string;
	label: string;
	options: FilterBy['options'];
	onChange: (value: string, filterId?: string) => void;
};

export const CustomSelect = ({ id, label, options, onChange }: CustomSelectProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [selectedOption, setSelectedOption] = useState(options[0]);
	const [focusedIndex, setFocusedIndex] = useState(0);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useClickOutside(dropdownRef, () => setIsOpen(false));

	const handleOptionClick = (option: (typeof options)[0]) => {
		setSelectedOption(option);
		onChange(option.value, id);
		setIsOpen(false);
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === 'ArrowDown') {
			e.preventDefault();
			setFocusedIndex((prev) => Math.min(prev + 1, options.length - 1));
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			setFocusedIndex((prev) => Math.max(prev - 1, 0));
		} else if (e.key === 'Enter') {
			handleOptionClick(options[focusedIndex]);
		} else if (e.key === 'Escape') {
			setIsOpen(false);
		}
	};

	return (
		<div ref={dropdownRef} className="relative flex flex-col py-2 md:w-72">
			<label htmlFor={id} id={`${id}-label`} className="pb-1 text-lg font-bold">
				{label}:
			</label>
			<button
				id={id}
				role="combobox"
				type="button"
				aria-controls={`${id}-options`}
				aria-haspopup="listbox"
				tabIndex={0}
				aria-expanded={isOpen}
				aria-labelledby={`${id}-label`}
				className="flex cursor-pointer items-center justify-between rounded-sm bg-white px-4 py-2 text-sm shadow-sm"
				onClick={() => setIsOpen(!isOpen)}
				onKeyDown={handleKeyDown}
			>
				<span>{selectedOption.label}</span>
				<figure className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>
					<ArrowIcon color="gray" />
				</figure>
			</button>
			{isOpen ? (
				<ul
					id={`${id}-options`}
					role="listbox"
					aria-labelledby={`${id}-label`}
					className="bg-bg-tertiary absolute top-full z-10 w-full transform rounded-sm shadow-md"
				>
					{options.map((option, index) => (
						<li
							key={`select-option-${option.value}`}
							role="option"
							aria-selected={selectedOption.value === option.value}
							className={`hover:bg-bg-secondary w-full cursor-pointer px-6 py-4 transition-colors ${
								selectedOption.value === option.value || index === focusedIndex
									? 'bg-bg-secondary'
									: ''
							}`}
							onClick={() => handleOptionClick(option)}
							onMouseEnter={() => setFocusedIndex(index)}
						>
							{option.label}
						</li>
					))}
				</ul>
			) : (
				''
			)}
		</div>
	);
};
