import { ActionTypes, AppAction, SuggestAction } from "../action-types";
import { Dispatch } from "redux";

export const appSetPage = (page: "Play" | "Suggest") => {
    return (dispatch: Dispatch<AppAction>) => {
        dispatch({
            type: ActionTypes.APP_SET_PAGE,
            page: page
        })
    }
}
export const appSetCategories = (categories: []) => {
    return (dispatch: Dispatch<AppAction>) => {
        dispatch({
            type: ActionTypes.APP_SET_CATEGORIES,
            categories: categories
        })
    }
}

export const suggestSetCategory = (category: string) => {
    return (dispatch: Dispatch<SuggestAction>) => {
        dispatch({
            type: ActionTypes.SUGGEST_SET_CATEGORY,
            category: category
        })
    }
}
export const suggestSetText = (text: string) => {
    return (dispatch: Dispatch<SuggestAction>) => {
        dispatch({
            type: ActionTypes.SUGGEST_SET_TEXT,
            text: text
        })
    }
}
export const suggestAddCorrect = (correct: string) => {
    return (dispatch: Dispatch<SuggestAction>) => {
        dispatch({
            type: ActionTypes.SUGGEST_ADD_CORRECT,
            correct: correct
        })
    }
}
export const suggestRemoveCorrect = (correct: string) => {
    return (dispatch: Dispatch<SuggestAction>) => {
        dispatch({
            type: ActionTypes.SUGGEST_REMOVE_CORRECT,
            correct: correct
        })
    }
}