import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (nextMode, replace = false) => {
    // When replace is true then set the history to reflect that we are replacing the current mode.
    if(replace) {
      history.pop();
    }
    history.push(nextMode);
    setHistory(history);
    return setMode(nextMode);
  }
  const back = () => {
    if (history.length > 1) {
      history.pop();
      setHistory(history);
      return setMode(history[history.length - 1]);  
    }
  };

  return { mode, transition, back };
}