import { useRouter } from "next/router";
import style from "../styles/notFound.module.css";

export default function Custom404() {
  const router = useRouter();

  return (
    <div className={style.not_found}>
      <h1>404</h1>
      <p>
        <span>A equipe rocket</span> venceu desta vez .
      </p>

      <button onClick={() => router.push("/")}>Home</button>
      <img src="/teamRocket.svg" alt="team rocket" />
    </div>
  );
}
