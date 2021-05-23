import { Header } from "../components/Header";
import { ScoreContextProvider } from "../contexts/ScorerContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ScoreContextProvider>
      <Header />
      <Component {...pageProps} />
    </ScoreContextProvider>
  );
}

export default MyApp;
