import shuffle from "./shuffle";
import {MAX_AMOUNT_OF_ANSWERS} from "../data/constants";

export default function getTasks() {

    const tasksData = [
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

    return tasksData.map(
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
    );
}