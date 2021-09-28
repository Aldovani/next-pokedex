import { api, myApi } from "../services/index";
import { Filter } from "../components/Filter/index";
import { Pokedex } from "../components/Pokedex/index";

import styles from "../styles/Pokedex.module.css";
import Head from "next/head";
import { useEffect, useState } from "react";
import { FilterPokemonProvider } from "../context/filterPokemonContext";

export default function Pokemons({ pokemon }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY >= 3000) {
        setHide(true);
      } else {
        setHide(false);
      }
    });
    return () => {
      // setState({}); // This worked for me
    };
  }, []);

  return (
    <main className={styles.container}>
      <Head>
        <title>Pokedex | Pokedex</title>
      </Head>
      <h1 className={styles.title}>
        <span> 898 Pokemon</span> for you to choose your favorite
      </h1>

      <FilterPokemonProvider>
        <Filter />
        <Pokedex pokemon={pokemon} />
      </FilterPokemonProvider>

      <a
        href="#header"
        className={`${styles["button-to-top"]} ${hide ? styles.hide : ""}`}
      >
       <img src="/seta.png" alt="seta para cima " />
      </a>
    </main>
  );
}

export async function getStaticProps() {
  // const response = await api.get("pokedex/1");
  const response = await myApi.get("pokemon");
  console.log(response.data);
  return {
    props: {
      pokemon: response.data,
    },
  };
}
