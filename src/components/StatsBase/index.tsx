import style from "./style.module.css";
export function StatsBase({ stat }) {
  return (
    <div>
      <h1 className={style.title}>Stats Base</h1>
      <ol className={style.list}>
        {stat.map((e, i) => {
          return (
            <li key={i} className={style.ElementList}>
              <p >{e.base_stat}</p>
              <p >{e.stat.name}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
