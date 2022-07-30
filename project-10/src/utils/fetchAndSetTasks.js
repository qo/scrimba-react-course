import {MAX_AMOUNT_OF_ANSWERS} from "../data/constants";
import shuffle from "./shuffle";

export default async function fetchAndSetTasks(setTasks) {

    const res = await fetch("https://opentdb.com/api.php?amount=3");

    const data = await res.json();
    const tasksData = data.results;

    setTasks(
        tasksData.map(
            (taskData, taskId) => {

                let answers = taskData.incorrect_answers.map(
                    (incorrect_answer, answerId) => {
                        return {
                            id: taskId * MAX_AMOUNT_OF_ANSWERS + answerId,
                            content: incorrect_answer,
                            isCorrect: false
                        }
                    }
                );

                answers.push({
                    id: taskId * MAX_AMOUNT_OF_ANSWERS + answers.length,
                    content: taskData.correct_answer,
                    isCorrect: true
                })

                shuffle(answers);

                return {
                    question: {
                        id: taskId,
                        content: taskData.question
                    },
                    answers: answers
                }
            }
        )
    )
}