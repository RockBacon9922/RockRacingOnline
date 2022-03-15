import Navbar from "./navbar";
import Footer from "./footer";
import Head from "./head";

export default function Layout({ children }) {
  return (
    <>
      <Head />
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
