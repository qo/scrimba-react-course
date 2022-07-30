import {MAX_AMOUNT_OF_ANSWERS} from "../data/constants";

// Considering answerId, get questionId
export default function getQuestionId(answerId) {
    return Math.floor(answerId/MAX_AMOUNT_OF_ANSWERS);
}