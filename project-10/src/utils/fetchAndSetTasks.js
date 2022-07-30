import {MAX_AMOUNT_OF_ANSWERS} from "../data/constants";
import shuffle from "./shuffle";

export default async function fetchAndSetTasks(setTasks) {

    // Get the data from the API
    const res = await fetch("https://opentdb.com/api.php?amount=3");
    const data = await res.json();
    const tasksData = data.results;

    // Set state
    setTasks(

        // Create new object instead of what's coming from the API
        tasksData.map(

            // For each taskData (for each question)
            (taskData, taskId) => {

                // Create list of objects "answers" with every answer
                // having an id, content, isCorrect properties

                // Push incorrect answers
                let answers = taskData.incorrect_answers.map(
                    (incorrect_answer, answerId) => {
                        return {
                            id: taskId * MAX_AMOUNT_OF_ANSWERS + answerId,
                            content: incorrect_answer,
                            isCorrect: false
                        }
                    }
                );

                // Push remaining correct answer
                answers.push({
                    id: taskId * MAX_AMOUNT_OF_ANSWERS + answers.length,
                    content: taskData.correct_answer,
                    isCorrect: true
                })

                // Shuffle answers, so that correct answer
                // won't be last in the list all the time
                shuffle(answers);

                // Also assign id and content properties for
                // question object, and then
                // return that object to setTasks
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