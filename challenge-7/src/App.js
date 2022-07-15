import React, { useState } from "react"
import "./style.css"

export default function App() {
  /**
   * Challenge: Replace our hard-coded "Yes" on the page with
   * some state initiated with React.useState()
   */
  const [result, setResult] = useState("Yes")
  return (
      <div className="state">
        <h1 className="state--title">Is state important to know?</h1>
        <div className="state--value">
          <h1>{result}</h1>
        </div>
      </div>
  )
}
