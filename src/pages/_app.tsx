import { Header } from "../components/header";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
        <Header />
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;
