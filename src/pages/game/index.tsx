import style from "./game.module.css";
import Lottie from "react-lottie";
import loadingAnimation from "../../loadingAnimation.json";
import Head from "next/head";
import { Records } from "../../components/Records";
import { ScoreContext } from "../../contexts/ScorerContext";
import { useContext } from "react";
import { Info } from "../../components/Info";

export default function Game() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const {
    confirmar,
    recordScore,
    score,
    isLoading,
    start,
    isCorrect,
    sortPokemon,
    correto,
    setValueInput,
    setName,
    valueInput,
    number,
    tentativa,
    input,
    name,
  } = useContext(ScoreContext);

  return (
    <>
      <div className={style.Container}>
        <Head>
          <title>Pokedex | Game</title>
        </Head>

        {!start ? (
          <section className={style.section}>
            <h1 className={style.tituloPokemon}>Quem é esse Pokemon ?</h1>
            <form className={style.formNome}>
              <input
                placeholder="Nome"
                type="text"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="nome"
                style={{ width: "20rem" }}
              />

              <button
                disabled={name.trim() === ""}
                className={style.buttonStart}
                onClick={(e) => {
                  e.preventDefault();
                  sortPokemon();
                }}
              >
                Jogar
              </button>
            </form>
          </section>
        ) : (
          <>
            {!isLoading ? (
              <Lottie height={300} width={300} options={defaultOptions} />
            ) : (
              <>
                <Records />
                <Info/>
                <div className={style.score}>
                  <h2>Pontuação recorde</h2>
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
                      disabled={valueInput.trim() === "" || isCorrect}
                    >
                      Confirmar
                    </button>
                  </form>
                </section>
                <div className={style.score}>
                  <h2>Pontos</h2>
                  <h1>{`${score}`.padStart(2, "0")}</h1>
                  <h3>
                    Tentativas:<strong>{tentativa}</strong>
                  </h3>
                </div>

              </>
            )}
          </>
        )}
      </div>
    </>
  );
}
