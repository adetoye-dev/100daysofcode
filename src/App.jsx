import { useState, useEffect } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import Confetti from "react-confetti";
import "./App.css";

const App = () => {
  const [daysCount, setDaysCount] = useState(1);

  const [container] = useAutoAnimate();

  useEffect(() => {
    if (daysCount < 100) {
      const id = setInterval(() => {
        setDaysCount((oldCount) => oldCount + 1);
      }, 100);
      return () => clearInterval(id);
    }
  }, [daysCount]);

  const Numbers = ({ count }) => {
    return <div className="numbers">{count}</div>;
  };

  return (
    <>
      {daysCount === 100 && <Confetti />}
      <main className="container" ref={container}>
        <div className="day">Day</div>
        <Numbers count={daysCount} />
      </main>
    </>
  );
};

export default App;
