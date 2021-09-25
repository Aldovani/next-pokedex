import Link from "next/link";
import style from "../styles/notFound.module.css";

export default function Custom404() {

  return (
    <section className={style.not_found}>
      <img src="/teamRocket.svg" alt="team rocket" />
      <h1>404</h1>

      <p>
     <span>The rocket</span> team has won this time.
      </p>

      <Link href="/">
        <button>Return</button>
      </Link>
    </section>
  );
}
