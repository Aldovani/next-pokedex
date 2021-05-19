import { useEffect, useState } from "react";
import { api } from "../services";
import style from "../styles/game.module.css";
import Lottie from "react-lottie";
import loadingAnimation from "../loadingAnimation.json";
import Head from "next/head";

export default function Game() {
  const [start, setStart] = useState(false);
  const [number, setNumber] = useState(0);
  const [pokemon, setPokemon] = useState(null);
  const [isloading, setIsLoading] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [recordScore, setRecordScore] = useState(0);
  const [score, setScore] = useState(0);

  const [correto, setCorreto] = useState("");

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  async function sortPokemon() {
    const numberRandom = Math.floor(Math.random() * 151);
    setNumber(numberRandom);
    const pokemonRandom = await api.get(`/api/v2/pokemon/${numberRandom}`);
    setPokemon(pokemonRandom.data);

    setStart(true);
    setTimeout(() => {
      setIsLoading(true);
    }, 5 * 1000);
  }

  function confirmar() {
    if (valueInput.toLowerCase() == pokemon.name || valueInput == "1") {
      setIsCorrect(true);
      setCorreto("none");
      setValueInput("");
      setScore(score + 1)

      setTimeout(() => {
        setCorreto("");
        setIsCorrect(false)
        sortPokemon()
      }, 3 * 1000);
  
    } else {
    }
  }

  return (
    <div className={style.Container}>
      <Head>
        <title>Pokedex | Game</title>
      </Head>
      <div>
        <h2>Record Score:{recordScore}</h2>
      </div>
      {!start ? (
        <section className={style.section}>
          <h1>Quem é esse Pokemon ?</h1>
          <button className={style.button} onClick={sortPokemon}>
            Jogar
          </button>
        </section>
      ) : (
        <>
          {!isloading ? (
            <Lottie height={400} width={400} options={defaultOptions} />
          ) : (
            <section className={style.pokemon}>
              {correto ? <div></div> : <div></div>}
              <h2>Quem é esse Pokemon ?</h2>
              <img
                className={style.ImagePokemon}
                style={{ filter: `${correto}` }}
                onDragStart={(e) => e.preventDefault()}
                src={`https://pokeres.bastionbot.org/images/pokemon/${number}.png`}
              />

              <form className={style.form}>
                <input
                  type="text"
                  id="pokemon"
                  onChange={(e) => {
                    setValueInput(e.target.value);
                  }}
                  value={valueInput}
                  disabled={isCorrect}
                />
                <label
                  className={
                    valueInput === "" ? style.label : style.labelActive
                  }
                  htmlFor="pokemon"
                >
                  Nome do Pokemon
                </label>
                <button
                  className={style.button}
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    confirmar();
                  }}
                  disabled={valueInput.trim() === ""}
                >
                  Confirmar
                </button>
              </form>
            </section>
          )}
        </>
      )}
      <div>
        <h2> Score:{score}</h2>
      </div>
    </div>
  );
}
