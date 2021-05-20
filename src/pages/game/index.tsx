import { useEffect, useRef, useState } from "react";
import { api } from "../../services";
import style from "./game.module.css";
import Lottie from "react-lottie";
import loadingAnimation from "../../loadingAnimation.json";
import Head from "next/head";

export default function Game() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [start, setStart] = useState(false);
  const [number, setNumber] = useState(0);
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [valueInput, setValueInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [correto, setCorreto] = useState(false);
  const [recordScore, setRecordScore] = useState(0);
  const [tentativa, setTentativas] = useState(3);
const input=useRef(null)
  useEffect(() => {
    if (localStorage.getItem("record")) {
      setRecordScore(Number(localStorage.getItem("record")));
    } else {
      localStorage.setItem("record", "0");
    }
  }, []);

  useEffect(() => {
    if (!start) {
      return;
    }
    if (score >= recordScore) {
      setRecordScore(score);
      localStorage.setItem("record", `${score}`);
    }
  }, [score]);

  async function sortPokemon() {
    const numberRandom =  Math.floor(Math.random() * 486)+1;
    setNumber(numberRandom);
    const pokemonRandom = await api.get(`pokemon/${numberRandom}`);
    setPokemon(pokemonRandom.data);

    setStart(true);
    setTimeout(() => {
      setIsLoading(true);
    }, 5 * 1000);
  }

  function confirmar() {
    if (valueInput.toLowerCase() == pokemon.name|| valueInput==='1') {
      setIsCorrect(true);
      setCorreto(true);
      setValueInput("");
      setScore(score + 1);
      setTentativas(3)
      setTimeout(() => {
        setCorreto(false);
        setIsCorrect(false);
        input.current.focus()
      }, 4 * 1000);

      setTimeout(() => {
        sortPokemon();
      }, 5 * 1000);
    } else {
      setTentativas(tentativa - 1)
      console.log(tentativa)
      if (tentativa === 1) {
        setScore(0)
        setTentativas(3)
        sortPokemon();
      }
    }
  }

  return (
    <div className={style.Container}>
      <Head>
        <title>Pokedex | Game</title>
      </Head>

      {!start ? (
        <section className={style.section}>
          <h1 className={style.tituloPokemon}>Quem é esse Pokemon ?</h1>
          <button className={style.buttonStart} onClick={sortPokemon}>
            Jogar
          </button>
        </section>
      ) : (
        <>
          {!isLoading ? (
            <Lottie height={500} width={500} options={defaultOptions} />
          ) : (
            <>
              <div className={style.score}>
                <h2>Record Score</h2>
                <h1>{`${recordScore}`.padStart(2, "0")}</h1>
              </div>

              <section className={style.pokemon}>
                <h2>Quem é esse Pokemon ?</h2>
                {correto ? (
                  <img
                    className={style.ImagePokemon}
                    style={{ filter: "none" }}
                    onDragStart={(e) => e.preventDefault()}
                    src={`https://pokeres.bastionbot.org/images/pokemon/${number}.png`}
                  />
                ) : (
                  <img
                    className={style.ImagePokemon}
                    onDragStart={(e) => e.preventDefault()}
                    src={`https://pokeres.bastionbot.org/images/pokemon/${number}.png`}
                  />
                )}

                <form className={style.form}>
                      <input
                        ref={input}
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
              <div className={style.score}>
                <h2>Score</h2>
                <h1>{`${score}`.padStart(2, "0")}</h1>
                <h3>Tentativas:<strong>{tentativa}</strong></h3>
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}
