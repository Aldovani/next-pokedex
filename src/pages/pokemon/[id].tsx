import { GetStaticPaths } from "next";
import Head from "next/head";

import { api, myApi } from "../../services/index";
import { StatsBase } from "../../components/StatsBase";
import style from "./style.module.css";
import { CarouselPokemon } from "../../components/CarouselPokemon";

type PokemonType = {
  pokeApi: {
    stats: Stat[];
    species: { name: string; url: string };
    weight: number;
    height: number;
  };

  pokemon: {
    id: number;
    name: string;
    rarity: string;
    types: [];
  };
  id: number;
};

type Stat = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export default function Pokemon({ pokemon, pokeApi, id }: PokemonType) {
  const { weight, height } = pokeApi;

  return (
    <div className={style.container}>
      <Head>
        <title>Stats | {pokemon.name}</title>
      </Head>
      <section className={style.headerPokemon}>
        <h1 className={style.pokemonName}>
          {pokemon.name} <span>#{id.toString().padStart(3, "00")}</span>
          {/* {pokemon.rarity} */}
        </h1>
        <div className={style.types}>
          {pokemon.types.map((type, index) => (
            <p key={index} className={`type ${type}`}>
              {type}
            </p>
          ))}
        </div>
      </section>
      <div className={style.stats}>
        <img
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

          <StatsBase base_stat={pokeApi.stats} key={pokemon.id} />
        </section>
      </div>


      <section className={style.headerPokemon}>
        <h1 className={style.pokemonName}>Evolutions</h1>
      </section>
      <section className={style.containerEvolution}>
        <div className={style.evolution}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${1}.png`}
            alt={`pokemon ${pokemon.name}`}
            title={pokemon.name}
          />
        </div>
        <div className={style.evolution}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            alt={`pokemon ${pokemon.name}`}
            title={pokemon.name}
          />
        </div>
        <div className={style.evolution}>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${3}.png`}
            alt={`pokemon ${pokemon.name}`}
            title={pokemon.name}
          />
        </div>
      </section>

      <CarouselPokemon id={id} />


    </div>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   return {
//     paths: [],
//     fallback: "blocking",
//   };
// };
// export async function (context) {
// return {
// props: {}, // will be passed to the page component as props
// }
// }
export async function getServerSideProps(context) {
  const { id } = context.params;
  let pokemon;
  let pokeApi;
  try {
    pokemon = await myApi.get(`pokemon/${id}`);
    pokeApi = await api.get(`pokemon/${id}`);
console.log(pokemon)
    return {
      props: {
        pokemon: pokemon.data,
        pokeApi: pokeApi.data,
        id: Number(id),
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
