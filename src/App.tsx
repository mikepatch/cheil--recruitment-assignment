import './App.css';
import { Header } from '@/components/Header';
import { ProductListing } from '@/components/product-listing/ProductListing';
import { FilterSection } from '@/components/filter-section/FilterSection';
import { ProductsProvider } from '@/context/ProductsContext';

function App() {
	return (
		<ProductsProvider>
			<Header />
			<main>
				<FilterSection />
				<ProductListing />
			</main>
		</ProductsProvider>
	);
}

export default App;
