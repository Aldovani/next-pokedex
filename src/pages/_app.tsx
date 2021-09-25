import { Header } from "../components/header";
import { FilterPokemonProvider } from "../context/filterPokemonContext";
import "../styles/globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <FilterPokemonProvider>
        <Header />
        <Component {...pageProps} />
      </FilterPokemonProvider>
    </>
  );
}

export default MyApp;
