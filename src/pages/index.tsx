import { api } from "../services/index";
import { Card } from "../components/Card/index";
import styles from "../styles/Home.module.css" 


export default function Home({ pokemon }) {
  const listPokemon = pokemon.pokemon_entries;
  return (
    <div className={styles.names}>
      {listPokemon.map((e) => {
       return <Card key={e.entry_number} name={e}  />;
       })} 
    </div>
  );
}

export async function getStaticProps() {
  const response = await api.get("");

  return {
    props: {
      pokemon: response.data,
    },
  };
}
