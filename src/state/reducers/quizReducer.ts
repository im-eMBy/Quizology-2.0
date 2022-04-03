import { Question, Quiz } from "../../shared/types";
import { ActionTypes, QuizAction } from "../action-types";

interface QuizState {
    quizObject: Quiz | null,
    id: string | null,
    isAnswerClicked: boolean,
    isQuizEnd: boolean,
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
    quizObject: null,
    id: null,
    isQuizEnd: false,
    isAnswerClicked: false,
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
            return { ...state, id: action.id, nrOfQuestions: action.nrOfQuestions, time: action.time, initialTime: action.time }
        case ActionTypes.QUIZ_SET_QUIZ_OBJECT:
            return { ...state, quizObject: action.quiz }
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