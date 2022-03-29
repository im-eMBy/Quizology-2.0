import { Category, QuizInfo, UserObject } from "../../shared/types";
import { ActionTypes, AppAction } from "../action-types";

interface AppState {
    page: string,
    user: UserObject | null,
    quizzesInfo: QuizInfo[],
    categories: Category[],
    isQuizActive: boolean
}

const initialState: AppState = {
    page: "Play",
    user: null,
    quizzesInfo: [],
    categories: [],
    isQuizActive: false
}

export const appReducer = (state: AppState = initialState, action: AppAction) => {
    switch (action.type) {
        case ActionTypes.APP_SET_PAGE:
            return { ...state, page: action.page }
        case ActionTypes.APP_SET_USER:
            return { ...state, user: action.user }
        case ActionTypes.APP_SET_CATEGORIES:
            return { ...state, categories: action.categories }
        case ActionTypes.APP_SET_QUIZ_ACTIVE:
            return { ...state, isQuizActive: action.isActive }
        case ActionTypes.APP_SET_QUIZZES_INFO:
            return { ...state, quizzesInfo: action.quizzesInfo }
        default:
            return state
    }
}