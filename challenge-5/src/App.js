import './App.css';
import {useState} from "react";

function App() {

    const [things, setThings] = useState(["Thing 1", "Thing 2"]);

    function addItems() {
        const newThing = "Thing " + `${things.length + 1}`;
        setThings(prevState => [...prevState, newThing]);
    }

    const thingElements = things.map(thing => <p>{thing}</p>);

    return (
        <div>
            <button onClick={addItems}>Add Item</button>
            {thingElements}
        </div>
    )
}

export default App;
