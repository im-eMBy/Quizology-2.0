import { Category } from "../../shared/types";
import { ActionTypes, AppAction } from "../action-types";

interface AppState {
    page: "Play" | "Suggest" | "Admin",
    categories: Category[],
    isQuizActive: boolean
}

const initialState: AppState = {
    page: "Play",
    categories: [],
    isQuizActive: false
}

export const appReducer = (state: AppState = initialState, action: AppAction) => {
    switch (action.type) {
        case ActionTypes.APP_SET_PAGE:
            return { ...state, page: action.page }
        case ActionTypes.APP_SET_CATEGORIES:
            return { ...state, categories: action.categories }
        case ActionTypes.APP_SET_QUIZ_ACTIVE:
            return { ...state, isQuizActive: action.isActive }
        default:
            return state
    }
}