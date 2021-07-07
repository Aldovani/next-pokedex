import style from "./style.module.css";
import Link from "next/link";

type CardProps = {
  pokemon: {
    entry_number: number;
    pokemon_species: {
      name: string;
    };
  };
};

export function Card({ pokemon }: CardProps) {
  const convertNumber = (number: Number) => String(number).padStart(3, "00");
  return (
    <Link href={`/pokemon/${pokemon.entry_number}`}>
      <a className={style.Card} date-name={pokemon.pokemon_species.name}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.entry_number}.png`}
          alt={`${pokemon.pokemon_species.name}`}
          title={`${pokemon.pokemon_species.name}`}
          loading="lazy"
        />
        <p>
          {pokemon.pokemon_species.name}
          <br />
          <span> {`#${convertNumber(pokemon.entry_number)} `}</span>
        </p>
      </a>
    </Link>
  );
}
