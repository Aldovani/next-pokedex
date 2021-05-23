import {
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { api } from "../services";

type ScoreContextData = {
  confirmar: any;
  sortPokemon: any;
  setValueInput: (e) => void;
  setName: (e) => void;
  score: number;
  input: any;
  recordScore: number;
  tentativa: number;
  pokemon: [];
  correto: boolean;
  start: boolean;
  isCorrect: boolean;
  isLoading: boolean;
  valueInput: string;
  number: number;
  name:string
};

export const ScoreContext = createContext({} as ScoreContextData);

export function ScoreContextProvider({ children }) {
  const [valueInput, setValueInput] = useState("");
  const [start, setStart] = useState(false);
  const [number, setNumber] = useState(0);
  const [name, setName] = useState('');
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [correto, setCorreto] = useState(false);
  const [recordScore, setRecordScore] = useState(0);
  const [tentativa, setTentativas] = useState(3);
  const input = useRef(null);
  
  async function sortPokemon() {
    const numberRandom = Math.floor(Math.random() * 486) + 1;
    setNumber(numberRandom);
    const pokemonRandom = await api.get(`pokemon/${numberRandom}`);
    setStart(true);
    setPokemon(pokemonRandom.data);
    setTimeout(() => {
      setIsLoading(true);
    }, 5 * 1000);
  }

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

  function confirmar() {
    if (valueInput.toLowerCase() == pokemon.name || valueInput === "1") {
      setIsCorrect(true);
      setCorreto(true);
      setValueInput("");
      setScore(score + 1);
      setTentativas(3);
      setTimeout(() => {
        setCorreto(false);
        setIsCorrect(false);
        input.current.focus();
      }, 2 * 1000);

      setTimeout(() => {
        sortPokemon();
      }, 3 * 1000);
    } else {
      setIsCorrect(true);
      setTentativas(tentativa - 1);
      setTimeout(() => {
        setIsCorrect(false);
        if (tentativa === 1) {
          setScore(0);
          setTentativas(3);
          sortPokemon();
        }
      }, 2 * 1000);
    }
  }

  return (
    <ScoreContext.Provider
      value={{
        confirmar,
        sortPokemon,
        setValueInput,
        setName,
        valueInput,
        score,
        recordScore,
        tentativa,
        pokemon,
        correto,
        isCorrect,
        isLoading,
        start,
        number,
        input,
        name
      }}
    >
      {children}
    </ScoreContext.Provider>
  );
}

