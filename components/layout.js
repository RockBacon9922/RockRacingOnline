import Navbar from "./navbar";
import Footer from "./footer";
import Header from "./head";

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<Navbar />
			<main>{children}</main>
			<Footer />
		</>
	);
}
