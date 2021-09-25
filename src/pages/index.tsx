import Head from "next/head";
import style from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={style.container}>
      <Head>
        <title>Pokedex | Home</title>
      </Head>

      <main className={style.content}>
        <div className={style.containerContent}>
          <h1>Find all your favorite Pokemon</h1>
          <p>
            You can know the type of Pokemon, its strengths, disadvantages and
            abilities
          </p>

          <Link href="/pokedex">
            <button>See pokemons</button>
          </Link>
        </div>
      </main>

      <section className={style.containerBanner}>
        <img className={style.banner} src="/banner.svg" alt="Pikachu" />
      </section>
    </div>
  );
}
