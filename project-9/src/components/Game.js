import "./Game.css"
import {useState} from "react";
import Die from "./Die"

/**
 * Challenge: Create a `Roll Dice` button that will re-roll
 * all 10 dice
 *
 * Clicking the button should generate a new array of numbers
 * and set the `dice` state to that new array (thus re-rendering
 * the array to the page)
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

    function roll() {

        for (let i = 0; i < 10; i++)
            numbers[i] = Math.ceil(Math.random() * 6);

        setDice(
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
    }

    return (
        <div className="Game">
            <div className="dice">
                {diceElements}
            </div>
            <button
                className="roll-button"
                onClick={roll}
            >
                Roll
            </button>
        </div>
    )
}