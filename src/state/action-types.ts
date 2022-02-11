import { Category, QuestionProposition } from "../shared/types";

export enum ActionTypes {
    APP_SET_PAGE = "appSetPage",
    APP_SET_CATEGORIES = "appSetCategories",

    SUGGEST_SET_CATEGORY = "suggestSetCategory",
    SUGGEST_SET_DISPLAYED_CATEGORY = "suggestSetDisplayedCategory",
    SUGGEST_SET_TEXT = "suggestSetText",
    SUGGEST_ADD_CORRECT = "suggestAddCorrect",
    SUGGEST_REMOVE_CORRECT = "suggestRemoveCorrect",
    SUGGEST_ADD_INCORRECT = "suggestAddInorrect",
    SUGGEST_REMOVE_INCORRECT = "suggestRemoveInorrect",
    SUGGEST_RESET_FORM = "suggestResetForm",

    ADMIN_SET_PASSWORD = "adminSetPassword",
    ADMIN_SET_SUB_PAGE = "adminSetSubPage",
}

export type ActionAppSetPage = {
    type: ActionTypes.APP_SET_PAGE,
    page: "Play" | "Suggest" | "Admin"
}
export type ActionAppSetCategories = {
    type: ActionTypes.APP_SET_CATEGORIES,
    categories: Category[]
}

export type ActionSuggestSetCategory = {
    type: ActionTypes.SUGGEST_SET_CATEGORY,
    category: string
}
export type ActionSuggestSetDisplayedCategory = {
    type: ActionTypes.SUGGEST_SET_DISPLAYED_CATEGORY,
    displayedCategory: string
}
export type ActionSuggestSetText = {
    type: ActionTypes.SUGGEST_SET_TEXT,
    text: string
}
export type ActionSuggestAddCorrect = {
    type: ActionTypes.SUGGEST_ADD_CORRECT,
    correct: string
}
export type ActionSuggestRemoveCorrect = {
    type: ActionTypes.SUGGEST_REMOVE_CORRECT,
    correct: string
}
export type ActionSuggestAddIncorrect = {
    type: ActionTypes.SUGGEST_ADD_INCORRECT,
    incorrect: string
}
export type ActionSuggestRemoveIncorrect = {
    type: ActionTypes.SUGGEST_REMOVE_INCORRECT,
    incorrect: string
}
export type ActionSuggestResetForm = {
    type: ActionTypes.SUGGEST_RESET_FORM
}
export type ActionAdminSetSubPage = {
    type: ActionTypes.ADMIN_SET_SUB_PAGE,
    subpage: "Propositions" | "Categories" | "AddCategory"
}
export type ActionAdminSetPassword = {
    type: ActionTypes.ADMIN_SET_PASSWORD,
    password: string
}
export type AppAction = ActionAppSetPage | ActionAppSetCategories

export type SuggestAction = ActionSuggestSetCategory | ActionSuggestSetDisplayedCategory | ActionSuggestSetText | ActionSuggestAddCorrect | ActionSuggestRemoveCorrect | ActionSuggestAddIncorrect | ActionSuggestRemoveIncorrect | ActionSuggestResetForm

export type AdminAction = ActionAdminSetSubPage | ActionAdminSetPassword

export type Action = AppAction | SuggestAction | AdminAction