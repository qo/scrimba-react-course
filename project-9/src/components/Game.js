import "./Game.css"
import {useEffect, useState} from "react";
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

    const [won, setWon] = useState(false);

    useEffect(() => {

        let firstDieNumber;
        let won = true;

        dice.map(
            die => {
                if (die.isHeld === false)
                    won = false;
                if (die.id === 0) {
                    firstDieNumber = die.number;
                }
                else
                    if (die.number !== firstDieNumber) {
                        won = false;
                    }
            }
        );

        setWon(won);

    }, [dice])

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

        let heldDieNumber = 0;

        dice.map(
            die => {
                if (die.isHeld) heldDieNumber = die.number;
            }
        )

        // If heldDieNumber is 0, no dies are currently held.
        if (heldDieNumber === 0 || heldDieNumber === dice[id].number) {
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
    }

    function restart() {

        setDice(
            dice => {
                return dice.map(
                    die => {
                        return {
                            ...die,
                            isHeld: false,
                            number: Math.ceil(Math.random() * 6)
                        }
                    }
                )
            }
        );

        setWon(false);
    }

    return (
        <div className="Game">
            <div className="about">
                <div className="title">
                    Tenzies
                </div>
                <div className="instructions">
                    Roll until all dice are the same.
                    Click each die to freeze it at its current value between rolls.
                </div>
            </div>
            <div className="dice">
                {diceElements}
            </div>
            <button
                className="button"
                onClick={won ? restart : roll}
            >
                <p className="button-text">{won ? "Restart" : "Roll"}</p>
            </button>
        </div>
    )
}