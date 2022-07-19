import './App.css';
import {useEffect, useState} from "react";

export default function App() {
  const [count, setCount] = useState(0)

  console.log("Component rendered")

  useEffect(() => {
      console.log("Effect function ran");
  }, [count]);

  return (
      <div>
        <h2>The count is {count}</h2>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
      </div>
  )
}