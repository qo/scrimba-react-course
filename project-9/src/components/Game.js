import "./Game.css"
import {useState} from "react";
import Die from "./Die"

/**
 * Challenge:
 *
 * Create state to hold our array of numbers. (Initialize
 * the state by calling our `allNewDice` function so it
 * loads all new dice as soon as the app loads)
 *
 * Map over the state numbers array to generate our array
 * of Die elements and render those in place of our
 * manually-written 10 Die elements.
 */

export default function Game() {

    const numbers = [];
    for (let i = 0; i < 10; i++)
        numbers.push(Math.ceil(Math.random() * 6));

    const [dice, setDice] = useState(
        () => {
            return numbers.map(
                number => {
                    return {
                        number: number,
                        isActive: false,
                    }
                }
            )
        }
    );

    let diceElements = dice.map(
        die =>
            <Die
                number={die.number}
                isActive={die.isActive}
            />
    );

    return (
        <div className="Game">
            <div className="dice">
                {diceElements}
            </div>
        </div>
    )
}