import { Category, Question } from "../../shared/types";
import { ActionTypes, QuizAction } from "../action-types";

interface QuizState {
    isAnswerClicked: boolean,
    isQuizEnd: boolean,
    category: Category | null,
    nrOfQuestions: number,
    questions: Question[],
    currentQuestion: Question | null,
    initialTime: number,
    time: number,
    correctCount: number,
    incorrectCount: number,
    answers: {}[]
}

const initialState: QuizState = {
    isQuizEnd: false,
    isAnswerClicked: false,
    category: null,
    nrOfQuestions: 3,
    questions: [],
    currentQuestion: null,
    initialTime: 999,
    time: 999,
    correctCount: 0,
    incorrectCount: 0,
    answers: []
}

export const quizReducer = (state: QuizState = initialState, action: QuizAction) => {
    switch (action.type) {
        case ActionTypes.QUIZ_INIT:
            return { ...state, category: action.category, nrOfQuestions: action.nrOfQuestions, time: action.time, initialTime: action.time }
        case ActionTypes.QUIZ_SET_QUESTIONS:
            return { ...state, questions: action.questions }
        case ActionTypes.QUIZ_SET_CURRENT_QUESTION:
            return { ...state, currentQuestion: action.currentQuestion }
        case ActionTypes.QUIZ_SET_IS_ANSWER_CLICKED:
            return { ...state, isAnswerClicked: action.isClicked }
        case ActionTypes.QUIZ_ADD_CORRECT:
            return { ...state, correctCount: ++state.correctCount }
        case ActionTypes.QUIZ_ADD_INCORRECT:
            return { ...state, incorrectCount: ++state.incorrectCount }
        case ActionTypes.QUIZ_TAKE_TIME:
            return { ...state, time: state.time - 1 }
        case ActionTypes.QUIZ_END:
            return { ...state, isQuizEnd: true }
        case ActionTypes.QUIZ_RESET:
            return initialState
        default:
            return state
    }
}