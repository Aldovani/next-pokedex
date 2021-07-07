import { useRouter } from "next/router";
import Head from "next/head";
import style from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  return (
    <div className={style.container}>
      <Head>
        <title>Pokedex | Home</title>
      </Head>

      <main className={style.content}>
      

        <h1>Encontre todos os seus Pokémon favorito</h1>
        <p>
          Você pode saber o tipo de Pokémon, seus pontos fortes, desvantagens e
          habilidades
        </p>
  
        <button
          onClick={() => {
            router.push("/pokedex");
          }}
        >
          Veja os pokemon
        </button>
      </main>

      <section className={style.containerBanner}>
        <img className={style.banner} src="/banner.svg" alt="" />
      </section>
    </div>
  );
}
