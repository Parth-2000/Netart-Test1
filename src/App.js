import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import ProductsBody from "./components/ProductsBody";

function App() {
	return (
		<div className="App">
			<Header />
			<MainBody />
			<ProductsBody />
			<Footer />
		</div>
	);
}

export default App;
