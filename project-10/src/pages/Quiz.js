import "../assets/Quiz.css"
import {useState} from "react";
import Button from "../components/Button";

export default function Quiz() {

    const tasks = [
        {
            question: "Question 1",
            correct_answer: "A",
            incorrect_answers: ["B", "C", "D"]
        },
        {
            question: "Question 2",
            correct_answer: "B",
            incorrect_answers: ["A"]
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

    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);
    const [chosenAnswerID, setChosenAnswerID] = useState(-1);

    // Each task contains 1 question, 1 correct answer and 1/3 incorrect answers.
    const quizElements = tasks.map(
        (task, taskIndex) => {
            const answerContents = task.incorrect_answers;
            answerContents.push(task.correct_answer);

            const answers = answerContents.map(
                (answerContent, answerIndex)  => {
                    return {
                        // 4 is the maximum amount of answers.
                        id: taskIndex * 4 + answerIndex,
                        content: answerContent
                    }
                }
            )

            const answerElements = answers.map(
                answer =>
                    <Button
                        className={`button small ${chosenAnswerID === answer.id ? "answer" : "answer-filled"}`}
                        onClick={setChosenAnswerID}
                        onClickValue={answer.id}
                        text={answer.content}
                    />
            )

            return (
                <div>
                    <div className="question">
                        { task.question }
                    </div>
                    <div className="answers">
                        { answerElements }
                    </div>
                </div>
            )
        }
    )

    const bottom = isFinished
        ?
        <div>
            <div className="result">
                You scored {score}/{tasks.length} correct answers
            </div>
            <Button
                className="button medium"
                onClick={setIsFinished}
                onClickValue={false}
                text="Play again"
            />
        </div>
        :
        <div>
            <Button
                className="button medium"
                onClick={setIsFinished}
                onClickValue={true}
                text="Check answers"
            />
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