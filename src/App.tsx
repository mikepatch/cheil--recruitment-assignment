import { Header } from '@/components/header/Header';
import { ProductListing } from '@/components/product-listing/ProductListing';
import { FilterSection } from '@/components/filter-section/FilterSection';
import { Provider } from 'react-redux';
import { store } from '@/store';

function App() {
	return (
		<Provider store={store}>
			<Header />
			<main className="bg-bg-primary pb-14">
				<div className="container mx-auto max-w-[1024px] px-6" role="main">
					<FilterSection />
					<ProductListing />
				</div>
			</main>
		</Provider>
	);
}

export default App;
