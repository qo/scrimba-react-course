import {useState} from "react";

export default function Quiz() {

    const questions = ["a", "b", "c"];

    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);

    const bottom = isFinished
        ?
        <div>
            <div className="result">
                You scored {score}/{questions.length} correct answers
            </div>
            <div
                className="restart-button"
                onClick={() => setIsFinished(false)}
            >
                Play Again
            </div>
        </div>
        :
        <div>
            <div
                className="get-results-button"
                onClick={() => setIsFinished(true)}
            >
                Check answers
            </div>
        </div>

    return (
        <div className="Quiz">
            <div className="main">

            </div>
            <div className="bottom">
                { bottom }
            </div>
        </div>
    )
}