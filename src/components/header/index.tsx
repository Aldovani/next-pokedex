import style from "./style.module.css";
import Link from "next/link";

export const Header = () => {

  return (
    <header className={style.header}>
        <img src="/logo.svg" alt="Logo" />
      <nav>
        <Link  href="/">
          <a  >Home</a>
        </Link>
        <Link href="/pokedex">
          <a>Pokedex</a>
        </Link>
        </nav>
    </header>
  );
};
