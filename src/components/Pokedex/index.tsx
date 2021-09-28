import style from "./style.module.css";
import Link from "next/link";
import { memo, useContext, useEffect, useState } from "react";
import { FilterPokemonContext } from "../../context/filterPokemonContext";

type CardProps = {
  pokemon: {
    id: number;
    name: string;
    types: [];
  };
};

function Card({ pokemon }: CardProps) {
  const convertNumber = (number: Number) => String(number).padStart(3, "00");
  return (
    <Link href={`/pokemon/${pokemon.id}`}>
      <a className={style.Card} title={pokemon.name}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
          alt={`${pokemon.name}`}
          title={`${pokemon.name}`}
          loading="lazy"
        />
        <p>
          {pokemon.name}
          <br />
          <span> {`#${convertNumber(pokemon.id)} `}</span>
        </p>
        <div className={style.type}>
          {pokemon.types.map((type, i) => (
            <p key={i} className={`${type}`}>
              {type}
            </p>
          ))}
        </div>
      </a>
    </Link>
  );
}

const CardMemo = memo(Card);

const Pokedex = ({ pokemon }) => {
  const { name, range, types, rarity } = useContext(FilterPokemonContext);
  const [filter, setFilter] = useState(null);

  useEffect(() => {
    const filter = pokemon.filter((pokemon) => {
      if (name.length > 0) {
        return pokemon.name.includes(name);
      }

      if (pokemon.id >= range[0] && pokemon.id <= range[1]) {
        if (pokemon.types.includes(types)) {
          if (rarity === pokemon.rarity || rarity === "all") return pokemon;
        }
        if (types === "all") {
          if (rarity === pokemon.rarity || rarity == "all") return pokemon;
        }
      }
    });
    setFilter(filter);
  }, [name, rarity, types, range]);

  return (
    <section className={style.containerPokemon}>
      {filter?.map((pokemon) => {
        return <CardMemo key={pokemon.id} pokemon={pokemon} />;
      })}
      {filter?.length == 0 && <p>Pokemon não encontrado </p>}
    </section>
  );
};

export { Pokedex };
