import { Category } from "../../shared/types";
import { ActionTypes, AppAction } from "../action-types";

interface AppState {
    page: "Play" | "Suggest",
    categories: Category[]
}

const initialState: AppState = {
    page: "Suggest",
    categories: [{
        name: "geography",
        displayName: "Geografia",
        visible: true,
        playable: true
    },
    {
        name: "medicine",
        displayName: "Medycyna",
        visible: true,
        playable: true
    }]
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