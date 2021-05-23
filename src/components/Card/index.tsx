import style from "./style.module.css";
import Link from "next/link";

export function Card({ name }) {
  const convertNumber = (number: Number) => String(number).padStart(3, "00");
  return (
    <Link href={`/pokemon/${name.entry_number}`}>
      <a className={style.Card}>
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${name.entry_number}.png`}
          alt=""
        />
        <p>
          {name.pokemon_species.name}
          <br />
          <span> {`#${convertNumber(name.entry_number)} `}</span>
        </p>
      </a>
    </Link>
  );
}
