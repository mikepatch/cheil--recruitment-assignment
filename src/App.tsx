import { Header } from '@/components/header/Header';
import { ProductListing } from '@/components/product-listing/ProductListing';
import { FilterSection } from '@/components/filter-section/FilterSection';
import { ProductsProvider } from '@/context/ProductsContext';

function App() {
	return (
		<ProductsProvider>
			<Header />
			<main className="bg-bg-primary pb-14">
				<div className="container mx-auto max-w-[1024px] px-6" role="main">
					<FilterSection />
					<ProductListing />
				</div>
			</main>
		</ProductsProvider>
	);
}

export default App;
