import { useState } from "react";
import { api } from "../services";
import style from "../styles/game.module.css";
import Lottie from 'react-lottie';
import loadingAnimation from '../loadingAnimation.json'

export default function Game() {

  const [start, setStart] = useState(false);
  const [number, setNumber] = useState(0);
  const [pokemon, setPokemon] = useState(null);
  const [isloading, setIsLoading] = useState(false);

  async function sortPokemon() {
    setStart(true);
    
    const numberRandom = Math.floor(Math.random() * 151);
    const pokemonRandom = await api.get(`/api/v2/pokemon/${numberRandom}`);
    setPokemon(pokemonRandom.data);
    setNumber(numberRandom);
    setInterval(() => {
      setIsLoading(true)
    },5*1000)
  }
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loadingAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div className={style.Container}>
      <h1>Quem é esse Pokemon ?</h1>
      {!start ? (
        <>
          <button
            onClick={() => {
              sortPokemon();
        
            }}
          >
            Jogar
          </button>
        </>
      ) : (
        <div>
          {!isloading ? (
            <Lottie options={defaultOptions} />
          ) : (
            <div className={style.ContainerPokemon}>
              <img
                width={100}
                height={100}
                src={`https://pokeres.bastionbot.org/images/pokemon/${number}.png`}
              />
          {JSON.stringify(pokemon?.name)}
                  <input type="text" />
                  <button>Confirmar</button>
            </div>
          )}

        </div>
      )}
    </div>
  );
}
