import { createContext, useState } from "react";

type FilterContext = {
  range: number[];
  types: string;
  rarity: string;
  name: string ;
  handleTypes: (e: string) => void;
  handleSeek: (e: number[]) => void;
  handleName: (e: string) => void;
  handleRarity: (e: string) => void;
};

export const FilterPokemonContext = createContext({} as FilterContext);

export function FilterPokemonProvider(props) {
  const [range, setRange] = useState([0, 898]);
  const [types, setTypes] = useState("all");
  const [rarity, setRarity] = useState("all");
  const [name, setName] = useState("");

  function handleSeek(e) {
    setRange(e);
  }
  function handleTypes(e) {
    setTypes(e);
  }
  function handleRarity(e) {
    setRarity(e);
  }
  
  function handleName(e) {
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
      }}
    >
      {props.children}
    </FilterPokemonContext.Provider>
  );
}
