import style from './style.module.css'
import Link from 'next/link'
export const Header = () => {
  return (
    <header className={style.header}>
      <h1>Pokedex</h1>
      <nav>
        <Link href="/">
        <a >Home</a>
        </Link>
        <Link href="/game">
        
        <a >Game</a>
        </Link>
      </nav>
    </header>
  );
};
