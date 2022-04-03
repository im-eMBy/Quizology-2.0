import { QuizInfo, UserObject } from "../../shared/types";
import { ActionTypes, AppAction } from "../action-types";

interface AppState {
    page: string,
    user: UserObject | null,
    quizzesInfo: QuizInfo[],
    isQuizActive: boolean
}

const initialState: AppState = {
    page: "Play",
    user: null,
    quizzesInfo: [],
    isQuizActive: false
}

export const appReducer = (state: AppState = initialState, action: AppAction) => {
    switch (action.type) {
        case ActionTypes.APP_SET_PAGE:
            return { ...state, page: action.page }
        case ActionTypes.APP_SET_USER:
            return { ...state, user: action.user }
        case ActionTypes.APP_SET_QUIZ_ACTIVE:
            return { ...state, isQuizActive: action.isActive }
        case ActionTypes.APP_SET_QUIZZES_INFO:
            return { ...state, quizzesInfo: action.quizzesInfo }
        default:
            return state
    }
}