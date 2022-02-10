import { ActionTypes, AppAction, SuggestAction, AdminAction } from "../action-types";
import { Dispatch } from "redux";

export const appSetPage = (page: "Play" | "Suggest" | "Admin") => {
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
export const suggestSetDisplayedCategory = (displayedCategory: string) => {
    return (dispatch: Dispatch<SuggestAction>) => {
        dispatch({
            type: ActionTypes.SUGGEST_SET_DISPLAYED_CATEGORY,
            displayedCategory: displayedCategory
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
export const suggestAddIncorrect = (incorrect: string) => {
    return (dispatch: Dispatch<SuggestAction>) => {
        dispatch({
            type: ActionTypes.SUGGEST_ADD_INCORRECT,
            incorrect: incorrect
        })
    }
}
export const suggestRemoveIncorrect = (incorrect: string) => {
    return (dispatch: Dispatch<SuggestAction>) => {
        dispatch({
            type: ActionTypes.SUGGEST_REMOVE_INCORRECT,
            incorrect: incorrect
        })
    }
}
export const adminSetSubPage = (subpage: "Propositions" | "Categories" | "AddCategory") => {
    return (dispatch: Dispatch<AdminAction>) => {
        dispatch({
            type: ActionTypes.ADMIN_SET_SUB_PAGE,
            subpage: subpage
        })
    }
}
export const adminSetPassword = (password: string) => {
    return (dispatch: Dispatch<AdminAction>) => {
        dispatch({
            type: ActionTypes.ADMIN_SET_PASSWORD,
            password: password
        })
    }
}