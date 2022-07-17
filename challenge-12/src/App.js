import './App.css';
import boxesData from './data/boxes'
import Box from "./Box";
import {useState} from "react";

function App(props) {

    const themeStyles =
        props.darkTheme
            ?
            {
                backgroundColor: "#323232",
                color: "#cdcdcd"
            }
            :
            {
                backgroundColor: "#cdcdcd",
                color: "#323232"
            };

    function toggleBox(id) {
        setBoxes(prevBoxes => {
            let nextBoxes = prevBoxes.map(prevBox => {
                let nextBox =
                    prevBox.id === id
                    ?
                        {
                            ...prevBox,
                            on: !prevBox.on
                        }
                    :
                        prevBox;
                return nextBox;
            });
            console.log(nextBoxes);
            return nextBoxes;
        });
    }

    const [boxes, setBoxes] = useState(boxesData);

    const boxElements = boxes.map(box =>
        <Box
            key={box.id}
            id={box.id}
            on={box.on}
            darkTheme={props.darkTheme}
            toggleBox={toggleBox}
        />
    )

    return (
        <div className="App" style={themeStyles}>
            <div className="title">
                Boxes Challenge
            </div>
            <div className="boxes">
                {boxElements}
            </div>
        </div>
    );
}

export default App;
