import style from './style.module.css'
import Link from 'next/link'

export function Card({ name }) {
  return (
    <div className={style.Card}>
      <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${name.entry_number}.png`} alt=""/>
      {name.pokemon_species.name}
      <Link href={`/pokemon/${name.pokemon_species.name}`}>
      <a><img src="/maisIcon.png" alt="" /></a>
      </Link>
    </div>
  )
 }