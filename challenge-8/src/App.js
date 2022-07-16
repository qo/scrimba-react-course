import React, {useState} from "react"
import "./style.css"
import "./Count"
import Count from "./Count";

export default function App() {

  /**
   * Challenge: Set up state to track our count (initial value is 0)
   */

  const [count, setCount] = useState(0);

  function add() {
    setCount(prevCount => prevCount + 1);
  }

  function subtract() {
    setCount(prevCount => prevCount - 1);
  }

  console.log("App component rendered");

  return (
      <div className="counter">
        <button className="counter--minus" onClick={subtract}>–</button>
        <Count count={count} />
        <button className="counter--plus" onClick={add}>+</button>
      </div>
  )
}