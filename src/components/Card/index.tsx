import style from "./style.module.css";
import Link from "next/link";

export function Card({ name }) {
  return (
    <div className={style.Card}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${name.entry_number}.png`}
        alt=""
      />
      <p >
    {`#${name.entry_number} `}
      </p>
        <p>{name.pokemon_species.name}</p>
      <Link href={`/pokemon/${name.pokemon_species.name}`}>
        <a>
          <img src="/maisIcon.png" alt="icon mais informação" />
        </a>
      </Link>
    </div>
  );
}
