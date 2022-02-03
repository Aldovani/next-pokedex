import { useContext, useState } from "react";
import styles from "./style.module.css";
import { FilterPokemonContext } from "../../context/filterPokemonContext";
import Slider, { createSliderWithTooltip } from "rc-slider";
import "rc-slider/assets/index.css";
const Range = createSliderWithTooltip(Slider.Range);

function Filter() {
  const {
    range,
    handleSeek,
    handleTypes,
    handleRarity,
    debounce,
  } = useContext(FilterPokemonContext);
const [input, setInput]=useState("");

  return (
    <div className={styles.container}>
      <input
        value={input}
        className={styles.input}
        onChange={(e) => {
          setInput((e.target.value).toLowerCase());
          debounce((e.target.value).toLowerCase());
        }}
        type="text"
        placeholder="Find your pokémon ...."
      />

      <div className={styles.wraper}>
        <div className={styles.range}>
          0
          <Range
            min={1}
            max={898}
            onChange={(e) => {
              handleSeek(e);
            }}
            value={[range[0], range[1]]}
            defaultValue={[range[0], range[1]]}
          />
          898
        </div>

        <label className={styles.select}>
          Type
          <select
            onChange={(e) => {
              handleTypes(e.target.value.toLowerCase());
            }}
          >
            <option defaultValue="all">All</option>
            <option defaultValue="bug">Bug</option>
            <option defaultValue="dark">Dark</option>
            <option defaultValue="dragon">Dragon</option>
            <option defaultValue="electric">Electric</option>
            <option defaultValue="fairy">Fairy</option>
            <option defaultValue="flying">Flying</option>
            <option defaultValue="fighting">Fighting</option>
            <option defaultValue="fire">Fire</option>
            <option defaultValue="grass">Grass</option>
            <option defaultValue="ground">Ground</option>
            <option defaultValue="ghost">Ghost</option>
            <option defaultValue="ice"> Ice</option>
            <option defaultValue="normal">Normal</option>
            <option defaultValue="poison">Poison</option>
            <option defaultValue="psychic">Psychic</option>
            <option defaultValue="rock">Rock</option>
            <option defaultValue="steel">Steel</option>
            <option defaultValue="water">Water</option>
          </select>
          <img src="/down-arrow.svg" />
        </label>
        <label className={styles.select}>
          Rarity:
          <select
            onChange={(e) => {
              handleRarity(e.target.value.toLowerCase());
            }}
          >
            <option value="all">All</option>
            <option value="Common">Common</option>
            <option value="Uncommon">Uncommon</option>
            <option value="Rare">Rare</option>
            <option value="mythical">Mythical</option>
            <option value="Legendary">Legendary</option>
            <option value="ultra-beast">ultra beast</option>
          </select>
          <img src="/down-arrow.svg" />
        </label>
      </div>
    </div>
  );
}

export { Filter };
