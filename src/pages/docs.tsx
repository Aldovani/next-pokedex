import styles from "../styles/docs.module.css";

export default function Docs() {
  return (
    <main className={styles.container}>
  
      <details className={styles.details}>
        <summary>
          <span className="summaryTitle">
            Details element with custom arrow!
          </span>
          <div className={styles.containerSummary}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-chevron-down"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </summary>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            aliquid explicabo, expedita laborum odit praesentium natus
            repellendus corporis dicta illum ullam eveniet, nihil cum aspernatur
            dolore, vel deleniti ab ad! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Delectus, laudantium dolorum. Tempore delectus
            tempora nihil impedit quasi odio a omnis dolorem aut, itaque ab
            aspernatur sint amet fugit officia tenetur. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Facilis dicta facere quos nostrum
            sit harum maxime odio, aperiam unde totam velit asperiores in
            excepturi id ipsam adipisci sed quo delectus!
          </p>
        </div>
      </details>
    </main>
  );
}
