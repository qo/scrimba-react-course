import './App.css';
import boxesData from './data/boxes'
import Box from "./Box";
import {useState} from "react";

function App(props) {

  const theme = {
      backgroundColor: props.darkTheme ? "#222222" : "#cccccc",
      color: props.darkTheme ? "#cccccc" : "#222222",
  };

  const [boxes, setBoxes] = useState(boxesData);

  function toggleBox(id) {
      setBoxes(prevBoxes => {
          const newBoxes = [];
          for (let i = 0; i < prevBoxes.length; i++) {
              if (i + 1 !== id)
                  newBoxes.push(prevBoxes[i]);
              else {
                  newBoxes.push({
                      ...prevBoxes[i],
                      on: !prevBoxes[i].on
                  });
              }
          }
          return newBoxes;
      });
  }

  const boxesElements = boxes.map(
      box =>
          <Box
              key={box.id}
              id={box.id}
              on={box.on}
              darkTheme={props.darkTheme}
              toggleBox={toggleBox}
          />
  );

  return (
    <div style={theme} className="App">
      <div className="container">
          <h1>Boxes Challenge</h1>
          <div className="boxes">
              {boxesElements}
          </div>
      </div>
    </div>
  );
}

export default App;
