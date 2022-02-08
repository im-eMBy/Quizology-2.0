import { Category } from "../../shared/types";
import { ActionTypes, AppAction } from "../action-types";

interface AppState {
    page: "Play" | "Suggest" | "Admin",
    categories: Category[]
}

const initialState: AppState = {
    page: "Suggest",
    categories: []
}

export const appReducer = (state: AppState = initialState, action: AppAction) => {
    switch (action.type) {
        case ActionTypes.APP_SET_PAGE:
            return { ...state, page: action.page }
        case ActionTypes.APP_SET_CATEGORIES:
            return { ...state, categories: action.categories }
        default:
            return state
    }
}