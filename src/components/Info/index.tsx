import { useContext, useState } from "react";
import { ScoreContext } from "../../contexts/ScorerContext";
import style from "./style.module.css";
export function Info() {
  const { sortPokemon } = useContext(ScoreContext);
  const [mostra, setMostra] = useState(false);
  return (
    <>
      <button onClick={() => setMostra(!mostra)} className={style.info}>
        ⚠
      </button>

      <div
        onMouseLeave={() => setMostra(false)}
        className={style.containerInfo}
        style={mostra ? { opacity: 1 } : { opacity: 0 }}
      >
       
            <p className={style.erro}>
          Casso o pokemon não Apareça aperte  
              {" "}
               <button onClick={sortPokemon}> Aqui</button>
            </p>
      
      </div>
    </>
  );
}
