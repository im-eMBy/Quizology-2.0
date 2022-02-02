import { Category, QuestionProposition } from "../shared/types";

export enum ActionTypes {
    APP_SET_PAGE = "appSetPage",
    APP_SET_CATEGORIES = "appSetCategories",

    SUGGEST_SET_CATEGORY = "suggestSetCategory",
    SUGGEST_SET_TEXT = "suggestSetText",
    SUGGEST_ADD_CORRECT = "suggestAddCorrect",
    SUGGEST_REMOVE_CORRECT = "suggestRemoveCorrect",
    SUGGEST_ADD_INCORRECT = "suggestAddInorrect",
    SUGGEST_REMOVE_INCORRECT = "suggestRemoveInorrect",
}

export type ActionAppSetPage = {
    type: ActionTypes.APP_SET_PAGE,
    page: "Play" | "Suggest"
}
export type ActionAppSetCategories = {
    type: ActionTypes.APP_SET_CATEGORIES,
    categories: Category[]
}

export type ActionSuggestSetCategory = {
    type: ActionTypes.SUGGEST_SET_CATEGORY,
    category: string
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

export type AppAction = ActionAppSetPage | ActionAppSetCategories

export type SuggestAction = ActionSuggestSetCategory | ActionSuggestSetText | ActionSuggestAddCorrect | ActionSuggestRemoveCorrect

export type Action = AppAction | SuggestAction