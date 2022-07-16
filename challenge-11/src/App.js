import './index.css';
import Header from "./Header";
import Body from "./Body";
import {useState} from "react";

function App() {

  const [username, setUsername] = useState("Alex");

  return (
    <div className="App">
      <Header username={username} />
      <Body username={username} />
    </div>
  );
}

export default App;
