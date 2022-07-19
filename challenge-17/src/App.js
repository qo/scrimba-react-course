import './App.css';
import {useEffect, useState} from "react";

export default function App() {
    const [starWarsData, setStarWarsData] = useState({});
    const [count, setCount] = useState(1);

    /**
     * Challenge: Combine `count` with the request URL
     * so pressing the "Get Next Character" button will
     * get a new character from the Star Wars API.
     * Remember: don't forget to consider the dependencies
     * array!
     */

    alert("Rendering...")

    useEffect(function() {
        alert("Getting data from API...");

        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count]);

    return (
        <div>
            { starWarsData &&
                <div className="character-data">
                    <h1>{starWarsData.name}</h1>
                    <h2>Gender: {starWarsData.gender}</h2>
                    <h2>Height: {starWarsData.height} cm</h2>
                    <h2>Weight: {starWarsData.mass} kg</h2>
                    <h2>Hair Color: {starWarsData.hair_color}</h2>
                    <h2>Skin Color: {starWarsData.skin_color}</h2>
                    <h2>Eye Color: {starWarsData.eye_color}</h2>
                    <h2>Birth Year: {starWarsData.birth_year}</h2>
                </div>
            }
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
        </div>
    )
}