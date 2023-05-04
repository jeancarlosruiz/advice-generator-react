import React from "react";
import styles from "./adviceContainer.module.css";
import VisuallyHidden from "./VisuallyHidden";

function AdviceContainer({ advice, createRandomNum }) {
  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{`Advice #${advice.id}`}</h2>
      <p className={styles.advice}>"{advice.advice}"</p>

      <picture>
        <source
          srcSet="../images/pattern-divider-desktop.svg"
          sizes="(max-width: 720px)"
        />
        <img
          src="../images/pattern-divider-mobile.svg"
          alt="Patter divider image"
        />
      </picture>

      <button className={styles.diceBtn} onClick={createRandomNum}>
        <svg
          width="24"
          height="24"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="dice-icon"
        >
          <title id="dice-icon">Dice Icon</title>
          <path
            d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
            fill="#202733"
          />
        </svg>
        <VisuallyHidden>Dice Button</VisuallyHidden>
      </button>
    </div>
  );
}

export default AdviceContainer;
