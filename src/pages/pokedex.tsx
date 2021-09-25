import { api, myApi } from "../services/index";
import { CardMemo } from "../components/Card/index";
import { Filter } from "../components/Filter/index";

import styles from "../styles/Pokedex.module.css";
import Head from "next/head";
import { FilterPokemonContext } from "../context/filterPokemonContext";
import { useContext, useEffect, useState } from "react";

export default function Pokemons({ pokemon }) {
  const { name, range, types, rarity } = useContext(FilterPokemonContext);
  const [hide, setHide] = useState(false);
  const [filter, setFilter] = useState(null);
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
  useEffect(() => {
    const filter = pokemon.pokemons.filter((pokemon) => {
      if (name.trim().length > 0 && pokemon.name.includes(name)) {
        return pokemon;
      }

      if (pokemon.id >= range[0] && pokemon.id <= range[1]) {
        if (pokemon.types.includes(types)) {
          if (rarity === pokemon.rarity || rarity === "all") return pokemon;
        }
        if (types === "all") {
          if (rarity === pokemon.rarity ||rarity == "all" ) return pokemon;
        }
      }
    });

    setFilter(filter);
  }, [name, rarity, types, range]);
  return (
    <main className={styles.container}>
      <Head>
        <title>Pokedex | Pokedex</title>
      </Head>
      <h1 className={styles.title}>
        <span> 898 Pokemon</span> for you to choose your favorite
      </h1>

      <Filter />

      <section>
        {filter?.map((pokemon) => {
          return <CardMemo key={pokemon.id} pokemon={pokemon} />;
        })}
        {filter?.length == 0 && <p>Pokemon não encontrado </p>}
      </section>
      <a
        href="#header"
        className={`${styles["button-to-top"]}`}
        id={`${hide ? styles.hide : ""}`}
      >
        <p>&#8593;</p>
      </a>
    </main>
  );
}

export async function getStaticProps() {
  // const response = await api.get("pokedex/1");
  const response = await myApi.get("pokemon");
  return {
    props: {
      pokemon: response.data,
    },
  };
}
