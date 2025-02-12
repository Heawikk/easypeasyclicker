import { useState, useEffect } from "react";

function App() {

  const [score, setScore] = useState(0)
  const [adder, setAdder] = useState(1)

  const addScore = () => {
    setScore(score + adder);
  }

  return (
    <div className="Container">
      <h1>{score}</h1>

      <button onClick={addScore}>+</button>
    </div>
  );
}

export default App;
