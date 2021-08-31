import { GetStaticPaths } from "next";
import Head from "next/head";

import { api } from "../../services/index";
import { StatsBase } from "../../components/StatsBase";

import style from "./style.module.css";

type PokemonType = {
  pokemon: {
    id: number;
    name: string;
    stats: Stat[];
    types: Type[];
    species: { name: string; url: string };
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
  const { weight, height }: any = pokemon;

  return (
    <div className={style.container}>
      <Head>
        <title>Stats | {pokemon.name}</title>
      </Head>
      <div className={style.headerPokemon}>
        <h1>{pokemon.name}</h1>
        <div className={style.types}>
          {pokemon.types.map((e, i) => (
            <p key={i} className={`type ${e.type.name}`}>
              {e.type.name}
            </p>
          ))}
        </div>
      </div>
      <div className={style.stats}>
        <img
          // src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
          alt={`pokemon ${pokemon.name}`}
          title={pokemon.name}
        />

        <section>
          <ul className={style.statsBody}>
            <li>
              <p>height</p>
              <span>{height / 10}M</span>
            </li>
            <li>
              <p>weight</p>
              <span>{weight / 10}KG</span>
            </li>
          </ul>

          <StatsBase base_stat={pokemon.stats} key={pokemon.id} />
        </section>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
export async function getStaticProps(context) {
  const { id } = context.params;
  let pokemon;
  try {
    pokemon = await api.get(`pokemon/${id}`);
    return {
      props: {
        pokemon: pokemon.data,
      },
    };
  } catch (e) {
    if (!pokemon) {
      return {
        redirect: {
          destination: "/404",
        },
      };
    }
  }
}
