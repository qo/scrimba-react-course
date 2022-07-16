import './App.css';
import boxesData from './data/boxes'
import Box from "./Box";
import {useState} from "react";

function App() {

  const [boxes, setBoxes] = useState(boxesData);

  const boxesElements = boxes.map(box => <Box id={box.id}/>);

  console.log(boxesElements);

  return (
    <div className="App">
      <h1>Boxes Challenge</h1>
      <div className="boxes">
        {boxesElements}
      </div>
    </div>
  );
}

export default App;
