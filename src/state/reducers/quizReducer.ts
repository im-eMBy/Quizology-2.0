import { Category, Question } from "../../shared/types";
import { ActionTypes, QuizAction } from "../action-types";

interface QuizState {
    category: Category | null,
    nrOfQuestions: number,
    questions: Question[],
    currentQuestion: Question | null,
    time: number,
    correctCount: number,
    incorrectCount: number,
    answers: {}[]
}

const initialState: QuizState = {
    category: null,
    nrOfQuestions: 3,
    questions: [],
    currentQuestion: null,
    time: 999,
    correctCount: 0,
    incorrectCount: 0,
    answers: []
}

export const quizReducer = (state: QuizState = initialState, action: QuizAction) => {
    switch (action.type) {
        case ActionTypes.QUIZ_INIT:
            return { ...state, category: action.category, nrOfQuestions: action.nrOfQuestions, time: action.time }
        case ActionTypes.QUIZ_SET_QUESTIONS:
            return { ...state, questions: action.questions }
        case ActionTypes.QUIZ_SET_CURRENT_QUESTION:
            return { ...state, currentQuestion: action.currentQuestion }
        default:
            return state
    }
}