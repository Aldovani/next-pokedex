import { api } from "../services/index";
import { Card } from "../components/Card/index";

import styles from "../styles/Pokedex.module.css";
import Head from "next/head";



export default function Pokedex({ pokemon }) {
  const listPokemon = pokemon.pokemon_entries;
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex | Pokedex</title>
      </Head>
      {listPokemon.map((pokemon) => {
        return <Card key={pokemon.entry_number} pokemon={pokemon} />;
      })}
    </div>
  );
}

export async function getStaticProps() {
  const response = await api.get("pokedex/1");
  return {
    props: {
      pokemon: response.data,
    },
  };
}
