import { api } from "../services/index";
import { Card } from "../components/Card/index";
import styles from "../styles/Home.module.css" 
import Head from "next/head";


export default function Home({ pokemon }) {
  const listPokemon = pokemon.pokemon_entries;
  return (
    <div className={styles.container}>
      <Head>
        <title>Pokedex | Home</title>
    </Head>
      {listPokemon.map((e) => {
       return <Card key={e.entry_number} name={e}  />;
       })} 
    </div>
  );
}

export async function getStaticProps() {
  const response = await api.get("api/v2/pokedex/2");

  return {
    props: {
      pokemon: response.data,
    },
    
  };
}
