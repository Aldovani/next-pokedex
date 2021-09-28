import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import { previous, next } from "../../utils";

import style from "./style.module.css";
export function CarouselPokemon({ id }) {
  const [pokemonArray, setPokemonArray] = useState([]);
  const settings = {
    centerPadding: "0px",
    infinite: true,
    centerMode: true,
    draggable: true,
    touchMove: true,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,

    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    const arrayNext = next(Number(id));
    const arrayPrevious = previous(Number(id));
    setPokemonArray([...arrayPrevious.reverse(), id, ...arrayNext]);
  }, [id]);

  return (
    <section className={style.container}>
      <Slider {...settings}>
        {pokemonArray.map((e, i) => {
          return (
            <Link key={i} href={`/pokemon/${e}`}>
              <div className={style.next}>
                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${e}.png`}
                  alt={`pokemon ${e}`}
                  title={e}
                  className={style.pokemonImg}
                />

                <span className={style.id}>#{String(e).padStart(3, "00")}</span>
              </div>
            </Link>
          );
        })}
      </Slider>
    </section>
  );
}
