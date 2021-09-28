import style from "./style.module.css";

type StatsBaseProps = {
  base_stat: BaseStatProps[];
};

type BaseStatProps = {
  base_stat: number;
  stat: {
    name: string;
  };
};

export function StatsBase({ base_stat }: StatsBaseProps) {
  const baseConverted = base_stat.map((e) => {
    const base_stat = Math.floor((Number(e.base_stat) * 100) / 260);
    return { ...e, base_stat };
  });

  return (
    <div>
      <ol className={style.list}>
        {baseConverted.map((e, i) => {
          return (
            <li key={i} className={style.ElementList}>
              <p>{e.stat.name}</p>

              <p>{e.base_stat.toFixed(3).replace(".", ",")}</p>
              <div className={style.bar}>
                <div
                  style={{ width: `${e.base_stat}%` }}
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
