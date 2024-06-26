import { useEffect, useRef, useState } from "react";
import "./App.css";
import ProgressBar from "./ProgressBar";

const totalMs = 10 * 1000;
const interval = 1 * 1000;
const totalCycles = totalMs / interval;
const progressMade = (interval / totalMs) * 100;

function App() {
  const [progress, setProgress] = useState(0);
  const timer = useRef(0);
  const cyclesCompleted = useRef(0);

  useEffect(() => {
    timer.current = setInterval(() => {
      console.log("cycles");
      setProgress((prevProgress) => prevProgress + progressMade);
      cyclesCompleted.current += 1;
      if (cyclesCompleted.current === totalCycles) clearInterval(timer.current);
    }, interval);

    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return <ProgressBar progress={progress} />;
}

export default App;
