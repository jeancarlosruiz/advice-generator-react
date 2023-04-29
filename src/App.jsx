import { useState, useEffect } from "react";

import VisuallyHidden from "./components/VisuallyHidden";
import AdviceContainer from "./components/AdviceContainer";
import Loading from "./components/Loading";

function App() {
  const [advice, setAdvice] = useState("");
  const [number, setNumber] = useState(117);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const createRandomNum = () => {
    const randomNum = Math.floor(Math.random() * 150) + 1;
    return setNumber(randomNum);
  };

  useEffect(() => {
    fetch(`https://api.adviceslip.com/advice/${number}`)
      .then((response) => response.json())
      .then((data) => {
        const { slip } = data;
        setAdvice(slip);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, [number]);

  return (
    <main>
      <header>
        <VisuallyHidden>Advice Generator App</VisuallyHidden>
      </header>
      {loading && <Loading />}
      {advice && (
        <AdviceContainer advice={advice} createRandomNum={createRandomNum} />
      )}
      {error && <h2>{error}</h2>}
    </main>
  );
}

export default App;
