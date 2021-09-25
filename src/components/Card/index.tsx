import style from "./style.module.css";
import Link from "next/link";
import { memo } from "react";

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

export const CardMemo = memo(Card);
