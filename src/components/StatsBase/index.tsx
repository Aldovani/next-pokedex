import style from "./style.module.css";

type StatsBaseProps = {
  base_stat:BaseStatProps[]

}

type BaseStatProps = {
  
  base_stat:number,
  stat: {
    name:string
  }
}

export function StatsBase({ base_stat }:StatsBaseProps) {

  return (
    <div>
      <ol className={style.list}>
        {base_stat.map((e, i) => {
          let valorConvertido = Math.floor((Number(e.base_stat) * 100) / 260);
          
          return (
            <li key={i} className={style.ElementList}>
              <p>{e.stat.name}</p>

              <p>{e.base_stat.toFixed(3).replace(".", ",")}</p>
              <div className={style.bar}>
                <div
                  style={{ width: `${valorConvertido}%` }}
                  className={style.barContent}
                ></div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
