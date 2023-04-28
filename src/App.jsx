import styles from "./App.module.css";
import { useState, useEffect } from "react";
import VisuallyHidden from "./components/VisuallyHidden";

function App() {
  const [advice, setAdvice] = useState(null);
  const [number, setNumber] = useState(5);

  const createRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    return setNumber(randomNum);
  };

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice/${number}`)
      .then((response) => response.json())
      .then((data) => {
        const { slip } = data;
        setAdvice(slip);
      });
  }, [number]);

  return (
    <>
      <VisuallyHidden>Advice Generator App</VisuallyHidden>
      {!advice && <h1>Loading....</h1>}
      {advice && (
        <main className={styles.main}>
          <h2 className={styles.title}>{`Advice #${advice.id}`}</h2>
          <p className={styles.advice}>{advice.advice}</p>

          <svg width="295" height="16" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path fill="#4F5D74" d="M0 8h122v1H0zM173 8h122v1H173z" />
              <g transform="translate(138)" fill="#CEE3E9">
                <rect width="6" height="16" rx="3" />
                <rect x="14" width="6" height="16" rx="3" />
              </g>
            </g>
          </svg>

          <button className={styles.diceBtn} onClick={createRandomNum}>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 0H4a4.005 4.005 0 0 0-4 4v16a4.005 4.005 0 0 0 4 4h16a4.005 4.005 0 0 0 4-4V4a4.005 4.005 0 0 0-4-4ZM7.5 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm4.5 4.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-9a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"
                fill="#202733"
              />
            </svg>
          </button>
        </main>
      )}
    </>
  );
}

export default App;
