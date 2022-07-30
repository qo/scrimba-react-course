import "../assets/Quiz.css"
import {useEffect, useState} from "react";
import Button from "../components/Button";
import RadioButton from "../components/RadioButton";
import getIntersection from "../utils/getIntersection";
import getQuestionId from "../utils/getQuestionIdByAnswerId";
import fetchAndSetTasks from "../utils/fetchAndSetTasks";
import { decode } from "html-entities"

export default function Quiz() {

    //  tasks state defines current quiz
    //  (a bunch of tasks,
    //  each task contains 1 question
    //  and a bunch of answers):
    //
    //  [
    //      {
    //          question: {
    //              id,
    //              content
    //          },
    //          answers: [
    //              {
    //                  id,
    //                  content,
    //                  isCorrect
    //              },
    //              ...
    //          ]
    //      },
    //      ...
    //  ]

    const [tasks, setTasks] = useState([]);

    // has user finished current quiz?
    const [isFinished, setIsFinished] = useState(false);

    // what's user's score (amount of answers they got right)
    const [score, setScore] = useState(0);

    // ids of chosen answers (reset once quiz changes)
    const [chosenAnswersIds, setChosenAnswersIds] = useState([]);

    // Run effect every time isFinished changes (that includes first render)
    useEffect(() => {

        // When user clicks "Check answers"
        if (isFinished) {

            // Count score and set score to that value
            setScore(() => {

                // Get all correct answers ids
                let correctAnswersIds = [];
                tasks.map(
                    task => task.answers.map(
                        answer => {
                            answer.isCorrect && correctAnswersIds.push(answer.id)
                        }
                    )
                )
                // Return amount of chosen answers ids that present in correctAnswersIds
                // as a score
                return getIntersection(correctAnswersIds, chosenAnswersIds).length;
            });
        }

        // When user clicks "Play again"
        else {
            // Get new tasks
            fetchAndSetTasks(setTasks);
            // Reset score
            setScore(0);
            // Reset chosenAnswerIds
            setChosenAnswersIds([]);
        }

    }, [isFinished])

    // Function to handle user input
    // (when they choose answer)
    function handleAnswerChange(event) {

        const { name, value } = event.target;
        const questionId = parseInt(name);
        const answerId = parseInt(value);

        // Update chosenAnswersIds
        setChosenAnswersIds(prevState => {

            // If some answer id
            // relates to the same question
            // as answerId does,
            // delete it from chosenAnswerIds
            let newState = prevState.filter(
                currentAnswerId => {
                    return getQuestionId(currentAnswerId) !== questionId;
                }
            );

            // Push answerId to chosenAnswersIds
            newState.push(answerId);

            return newState;
        });

    }

    // Get quiz elements from tasks
    const quizElements = tasks.map(

        // For each task (question)
        task => {

            // Get answer elements from answers list
            const answerElements = task.answers.map(

                // For each answer
                answer => {

                    // Determine whether answer is correct
                    const correctAnswerId = task.answers.find(
                        answer => answer.isCorrect
                    ).id;
                    const isCorrect = answer.id === correctAnswerId;

                    // Determine whether answer is chosen
                    const isChosen = chosenAnswersIds.includes(answer.id);

                    // Determine which style to apply for radio button

                    let style =
                        !isFinished
                            ?
                            "default"
                            :
                            (isCorrect
                                ?
                                "green"
                                :
                                (isChosen
                                    ?
                                    "red"
                                    :
                                    "transparent"
                                )
                            );

                    // Render radio button for this answer
                    return (
                        <RadioButton
                            text={decode(answer.content)}
                            radioGroupName={task.question.id}
                            id={answer.id}
                            checked={isChosen}
                            handleChange={handleAnswerChange}
                            style={style}
                        />
                    );

                }
            )

            // Render question and answers for this task (question)
            return (
                <div>
                    <div className="question">
                        { decode(task.question.content) }
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

    // Get bottom part of the quiz
    // (results and buttons to finish and restart)
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

    // Render <Quiz>
    return (
        <div className="Quiz">
            <div className="main">
                { quizElements }
            </div>
            { bottom }
        </div>
    )
}