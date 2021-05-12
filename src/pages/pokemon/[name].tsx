import Head from "next/head";
import { StatsBase } from "../../components/StatsBase";
import { api } from "../../services/index";
import style from "./style.module.css";

type PokemonType = {
  pokemon: {
    id: number;
    name: string;
    stats: Stat[];
    types: Type[];
    species:{name:string,url:string}
  };
};

type Type = {
  type: {
    name: string;
  };
};

type Stat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export default function Pokemon({ pokemon }: PokemonType) {
  return (
    <div className={style.container}>
      <Head>
        <title>Stats | {pokemon.name}</title>
      </Head>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <StatsBase stat={pokemon.stats} />

      </div>

      <div
     
        className={style.pokemon}
        style={{ background: `var(--${pokemon.types[0].type.name})` }}
      >
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          alt={`pokemon ${pokemon.name}`}
          title={pokemon.name}
        />
        <h1>{pokemon.name.toUpperCase()}</h1>
        <div className={style.containerTypes}>
          {pokemon.types.map((e, i) => (
            <img
              key={i}
              src={`https://res.cloudinary.com/da26hnrii/image/upload/v1620432613/${e.type.name}_.png`}
              alt={e.type.name}
              style={{ width: 50, height: 50 }}
              title={e.type.name}
            />
          ))}
        </div>

      </div>
    
    </div>
  );
}

export function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
export async function getStaticProps(context) {
  const { name } = context.params;
  let pokemon;
  try {
    pokemon = await api.get(`/api/v2/pokemon/${name}`);

    return {
      props: {
        pokemon: pokemon.data,
      },
    };
  } catch {
    if (!pokemon) {
      return {
        redirect: {
          destination: "/",
        },
      };
    }
  }
}
