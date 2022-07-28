import "../assets/Quiz.css"
import {useState} from "react";
import Button from "../components/Button";
import Radio from "../components/Radio";
import {MAX_AMOUNT_OF_ANSWERS} from "../data/constants";

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
    const [chosenAnswersIds, setChosenAnswersIds] = useState([]);

    function isAnswerChosen(answerId) {
        console.log("state", chosenAnswersIds);
        const result = chosenAnswersIds.includes(answerId);
        console.log("result", result);
        return result;
    }

    function handleAnswerChange(event) {

        console.log("before", chosenAnswersIds);

        const { value } = event.target;
        const answerId = parseInt(value);
        const questionId = Math.floor(answerId/MAX_AMOUNT_OF_ANSWERS);

        setChosenAnswersIds(prevState => {

            let newState = prevState.filter(
                currentAnswerId => {
                    const currentQuestionId = Math.floor(currentAnswerId/MAX_AMOUNT_OF_ANSWERS);
                    return currentQuestionId !== questionId;
                }
            );

            newState.push(answerId);

            console.log("after", newState);

            return newState;
        });
    }

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
                answer => {
                    console.log("answer", answer);
                    return (
                        <Radio
                            radioGroupName={task.index}
                            answer={answer}
                            isChosen={isAnswerChosen(answer.id)}
                            handleAnswerChange={handleAnswerChange}
                        />
                    );
                }
            )

            return (
                <div>
                    <div className="question">
                        { task.question }
                    </div>
                    <ul className="answers">
                        { answerElements }
                    </ul>
                    <div>
                        <hr className="hr" />
                    </div>
                </div>
            )
        }
    )

    const bottom = isFinished
        ?
        <div className="bottom">
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
        <div className="bottom">
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
            { bottom }
        </div>
    )
}