import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NavBar />
			<div>
				<Component {...pageProps} />
				<Footer />
			</div>
		</>
	);
}

export default MyApp;
