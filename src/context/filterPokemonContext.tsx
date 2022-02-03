import { createContext, useState } from "react";
import useDebounce from "../hooks/useDebouce";

type FilterContext = {
  range: number[];
  types: string;
  rarity: string;
  name: string ;
  handleTypes: (e: string) => void;
  handleSeek: (e: number[]) => void;
  handleName: (e: string) => void;
  handleRarity: (e: string) => void;
  debounce:(e:string) => void;
};

export const FilterPokemonContext = createContext({} as FilterContext);

export function FilterPokemonProvider(props) {
  const [range, setRange] = useState([0, 898]);
  const [types, setTypes] = useState("all");
  const [rarity, setRarity] = useState("all");
  const [name, setName] = useState("");
  const debounce = useDebounce(handleName, 500);

  function handleSeek(e:number[]) {
    setRange(e);
  }
  function handleTypes(e:string) {
    setTypes(e);
  }
  function handleRarity(e:string) {
    setRarity(e);
  }
  
  function handleName(e:string) {
    setName(e);
    setRange([0,898]);
    
  }

  return (
    <FilterPokemonContext.Provider
      value={{
        rarity,
        name,
        range,
        types,
        handleTypes,
        handleSeek,
        handleName,
        handleRarity,
        debounce
      }}
    >
      {props.children}
    </FilterPokemonContext.Provider>
  );
}
