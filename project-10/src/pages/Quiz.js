import "../assets/Quiz.css"
import {useEffect, useState} from "react";
import Button from "../components/Button";
import RadioButton from "../components/RadioButton";
import getTasks from "../utils/getTasks";
import getIntersection from "../utils/getIntersection";
import getQuestionId from "../utils/getQuestionIdByAnswerId";

export default function Quiz() {

    const [tasks, setTasks] = useState([]);
    const [isFinished, setIsFinished] = useState(false);
    const [score, setScore] = useState(0);
    const [chosenAnswersIds, setChosenAnswersIds] = useState([]);

    useEffect(() => {
        setTasks(getTasks());
    }, []);

    useEffect(() => {

        // when user clicks "check answers"
        if (isFinished) {
            setScore(() => {
                let correctAnswersIds = [];
                tasks.map(
                    task => task.answers.map(
                        answer => {
                            answer.isCorrect && correctAnswersIds.push(answer.id)
                        }
                    )
                )
                return getIntersection(correctAnswersIds, chosenAnswersIds).length;
            });
        }

        // when user clicks "play again"
        else {
            setTasks(getTasks());
            setScore(0);
            setChosenAnswersIds([]);
        }

    }, [isFinished])

    function handleAnswerChange(event) {

        const { name, value } = event.target;
        const questionId = parseInt(name);
        const answerId = parseInt(value);

        setChosenAnswersIds(prevState => {

            let newState = prevState.filter(
                currentAnswerId => {
                    return getQuestionId(currentAnswerId) !== questionId;
                }
            );

            newState.push(answerId);

            return newState;
        });

    }

    const quizElements = tasks.map(

        task => {

            const answerElements = task.answers.map(

                answer => {

                    const correctAnswerId = task.answers.find(
                        answer => answer.isCorrect
                    ).id;

                    const isCorrect = answer.id === correctAnswerId;

                    const isChosen = chosenAnswersIds.includes(answer.id);

                    let style =
                        !isFinished ? "default" : (isCorrect ? "green" : (isChosen ? "red" : "transparent"));

                    return (
                        <RadioButton
                            text={answer.content}
                            radioGroupName={task.question.id}
                            id={answer.id}
                            checked={isChosen}
                            handleChange={handleAnswerChange}
                            style={style}
                        />
                    );

                }
            )

            return (
                <div>
                    <div className="question">
                        { task.question.content }
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
    );

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