import "./Game.css"
import Die from "./Die"

/**
 * Challenge:
 *
 * Write a function (getDiceNumbers) that returns an array
 * of 10 random numbers between 1-6 inclusive.
 *
 **/

export default function Game() {

    function getRandomDiceNumbers() {
        let numbers = [];
        for (let i = 0; i < 10; i++)
            numbers.push(Math.ceil(Math.random() * 6));
        return numbers;
    }
    console.log(getRandomDiceNumbers());

    return (
        <div className="Game">
            <div className="dice">
                <Die number={1} isActive={false} />
                <Die number={2} isActive={true} />
                <Die number={3} isActive={false} />
                <Die number={4} isActive={true} />
                <Die number={5} isActive={false} />
                <Die number={6} isActive={true} />
                <Die number={7} isActive={false} />
                <Die number={8} isActive={true} />
                <Die number={9} isActive={false} />
                <Die number={0} isActive={true} />
            </div>
        </div>
    )
}