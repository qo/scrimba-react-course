import {useState} from "react";

export default function Quiz() {

    const results = [
        {
            question: "Question 1",
            correct_answer: "A",
            incorrect_answers: ["B", "C", "D"]
        },
        {
            question: "Question 2",
            correct_answer: "B",
            incorrect_answers: ["A", "C", "D"]
        },
        {
            question: "Question 3",
            correct_answer: "C",
            incorrect_answers: ["A", "B", "D"]
        },
        {
            question: "Question 4",
            correct_answer: "D",
            incorrect_answers: ["A", "B", "C"]
        },
    ];

    const quizElements = results.map(

        result => {

            const answers = result.incorrect_answers;
            answers.push(result.correct_answer);

            const answerElements = answers.map(
                answer =>
                    <div className="radio">
                        <label>
                            <input
                                type="radio"
                                value={answer}
                            />
                            {answer}
                        </label>
                    </div>
            )

            return (
                <div>
                    <div className="question">
                        { result.question }
                    </div>
                    <div className="answers">
                        <form>
                            { answerElements }
                        </form>
                    </div>
                </div>
            )
        }
    )

    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);

    const bottom = isFinished
        ?
        <div>
            <div className="result">
                You scored {score}/{results.length} correct answers
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
                { quizElements }
            </div>
            <div className="bottom">
                { bottom }
            </div>
        </div>
    )
}