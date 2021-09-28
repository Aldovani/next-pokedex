import style from "./style.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export const Header = () => {
  const { route } = useRouter();
  const [show, setShow] = useState(false);

  function handleCloseMobile(e) {
    if (e.target.dataset.js == "containerMenu") setShow(false);
  }

  return (
    <header
      id="header"
      className={`${style.header} ${show ? style.menuMobile : ""} `}
    >
      <nav className={`${show ? style.show : ""}`}>
        <Link href="/">
          <img
            src="/logo.svg"
            onClick={() => {
              setShow(false);
            }}
            alt="Logo"
            className={style.logo}
          />
        </Link>

        <div
          className={style.containerMenu}
          data-js="containerMenu"
          onClick={handleCloseMobile}
        >
          <div className={style.menu}>
            <ul className={style.list}>
              <li
                className={route === "/" ? style.selected : style.notSelected}
              >
                <Link href="/">
                  <a
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li
                className={
                  route === "/pokedex" ? style.selected : style.notSelected
                }
              >
                <Link href="/pokedex">
                  <a
                    onClick={() => {
                      setShow(false);
                    }}
                  >
                    Pokedex
                  </a>
                </Link>
              </li>
            </ul>

            <div
              className={style.iconClose}
              onClick={() => setShow(false)}
            >
              <img src="/x.svg" alt="fechar menu" />
            </div>
          </div>
        </div>

        <div
          className={style.iconOpen} 
          onClick={() => setShow(true)}
        >
          <img src="/menu.svg" alt="menu" />
        </div>
      </nav>
    </header>
  );
};
