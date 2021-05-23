import { useContext, useEffect, useState } from "react";

import { ScoreContext } from "../../contexts/ScorerContext";
import { apiRecords, idApi } from "../../services";
import style from "./style.module.css";
export function Records() {
  const { recordScore, score, name } = useContext(ScoreContext);
  const [mostra, setMostra] = useState(false);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    getRecords();
  }, []);

  useEffect(() => {
    if (score === 0) return;
    if (score >= 10) {
      console.log("aaaaaaaaaaaa");
      getRecords();
      setRecordsApi();
    }
  }, [score]);

  function emoji(indice) {
    if (indice === 1) return "🥇";
    else if (indice === 2) return "🥈";
    else if (indice === 3) return "🥉";
    else return "🏅";
  }

  async function getRecords() {
    const RecordsData = await apiRecords.get(idApi);
    setRecords(
      RecordsData.data.sort(function (a, b) {
        return b.scoreRecord - a.scoreRecord;
      })
    );
  }

  async function setRecordsApi() {
    const nome = records.map((e) => {
      return e.nome;
    });
    if (nome.indexOf(name) === -1)
      records.push({ nome: name, scoreRecord: score });

    records.forEach((e) => {
      if (e.nome.toLowerCase() === name.toLowerCase())
        if (e.scoreRecord < score) e.scoreRecord = score;
    });

    const res = await apiRecords.put(idApi, records);
  }

  return (
    <>
      <button className={style.button} onClick={() => setMostra(!mostra)}>
        🌐
      </button>

      <div
        style={
          mostra
            ? { transform: "translateX(0)" }
            : { transform: "translateX(-1000px)" }
        }
        className={style.conteudo}
      >
        <div onMouseLeave={() => setMostra(!mostra)} className={style.rank}>
          {records && (
            <table className={style.table}>
              <caption>Record Global</caption>
              <thead>
                <tr>
                  <th>Posição</th>
                  <th>Nome</th>
                  <th>Pontos</th>
                </tr>
              </thead>
              <tbody>
                {records.map((e, i) => {
                  return (
                    <tr key={i}>
                      <td>{emoji(i + 1)}</td>
                      <td className={style.name}>{e.nome}</td>
                      <td>{e.scoreRecord}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        <button
          className={style.atualizar}
          onClick={() => {
            getRecords();
          }}
        >
          <img src="/atualizar.ico" />
        </button>
        </div>
      </div>
    </>
  );
}
