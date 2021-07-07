import style from "./style.module.css";
import Link from "next/link";
import { useRouter } from 'next/router'

export const Header = () => {
  const router = useRouter()

  return (
    <header className={style.header}>
        <img src="/logo.svg" alt="Logo" />
      <nav>
        <Link  href="/">
          <a className={router.route==="/"?style.underline:""} >Home</a>
        </Link>
        <Link href="/pokedex">
          <a className={router.route==="/pokedex"?style.underline:""}>Pokedex</a>
        </Link>
        </nav>
    </header>
  );
};
