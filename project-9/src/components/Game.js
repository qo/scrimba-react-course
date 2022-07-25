import "./Game.css"
import {useState} from "react";
import Die from "./Die"

export default function Game() {

    const [dice, setDice] = useState(
        () => {
            let ids = [];
            for (let i = 0; i < 10; i++) {
                ids.push(i);
            }
            return ids.map(
                id => {
                    return {
                        id: id,
                        number: Math.ceil(Math.random() * 6),
                        isHeld: false
                    }
                }
            )
        }
    );

    let diceElements = dice.map(
        die =>
            <Die
                id={die.id}
                number={die.number}
                isHeld={die.isHeld}
                hold={hold}
            />
    );

    function roll() {
        setDice(
            dice => {
                return dice.map(
                    die => {

                        console.log(die);

                        return die.isHeld ?
                            die :
                            {
                            ...die,
                            number: Math.ceil(Math.random() * 6)
                        }
                    }
                )
            }
        );
    }

    function hold(id) {
        setDice(
            dice => {
                return dice.map(
                    die => {
                        return die.id === id ? {
                            ...die,
                            isHeld: true
                        } : die;
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