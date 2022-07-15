import React, {useState} from "react"
import "./style.css"

export default function App() {

  /**
   * Challenge: Set up state to track our count (initial value is 0)
   */

  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  return (
      <div className="counter">
        <button className="counter--minus" onClick={handleDecrement}>–</button>
        <div className="counter--count">
          <h1>{count}</h1>
        </div>
        <button className="counter--plus" onClick={handleIncrement}>+</button>
      </div>
  )
}