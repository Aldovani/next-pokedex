import style from "./style.module.css";
import Link from "next/link";
export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.container}>
        <img src="/logo.svg" alt="Logo" />
        <h1>POKEDEX</h1>
      </div>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/game">
          <a>Game</a>
        </Link>
      </nav>
    </header>
  );
};
