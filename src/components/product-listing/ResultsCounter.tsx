type ResultsCounterProps = {
	resultsCount: number;
};

export const ResultsCounter = ({ resultsCount }: ResultsCounterProps) => {
	return (
		<p aria-live="polite" role="status" className="py-4">
			Liczba wyników: <span>{resultsCount}</span>
		</p>
	);
};
