import React, { useState } from "react";

// Build a custom Hook that allows us to manage the visual mode of any component. 
// We can define the modes as constants in our component and then use the Hook to transition forward and back.
export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  // Require the addition of a replace argument on the transition function. 
  // When replace is true then set the history to reflect that we are replacing the current mode.
  const transition = (nextMode, replace = false) => {
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