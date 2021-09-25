import style from "./style.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const {route} = useRouter();
  return (
    <header id="header" className={style.header}>
      <img src="/logo.svg" alt="Logo" />
      <nav >
        <ul className={style.list}>
          <li className={route === "/" ? style.selected : style.notSelected}>
            <Link href="/">
              <a >Home</a>
            </Link>
          </li>
          <li className={route === "/pokedex" ? style.selected : style.notSelected
}>
            <Link href="/pokedex">
              <a>Pokedex</a>
            </Link>
          </li>
          <li className={route === "/docs" ? style.selected : style.notSelected
}>
            <Link href="/docs">
              <a>Documentation</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
