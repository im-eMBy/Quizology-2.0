import { QuestionProposition } from "../../shared/types";
import { ActionTypes, SuggestAction } from "../action-types";

const initialState: QuestionProposition = {
    category: null,
    displayedCategory: null,
    text: "",
    correct: [],
    incorrect: []
}

export const suggestReducer = (state: QuestionProposition = initialState, action: SuggestAction) => {
    switch (action.type) {
        case ActionTypes.SUGGEST_SET_CATEGORY:
            return { ...state, category: action.category }
        case ActionTypes.SUGGEST_SET_DISPLAYED_CATEGORY:
            return { ...state, displayedCategory: action.displayedCategory }
        case ActionTypes.SUGGEST_SET_TEXT:
            return { ...state, text: action.text }
        case ActionTypes.SUGGEST_ADD_CORRECT:
            return { ...state, correct: [...state.correct, action.correct] }
        case ActionTypes.SUGGEST_REMOVE_CORRECT:
            return { ...state, correct: state.correct.filter(answer => answer !== action.correct) }
        case ActionTypes.SUGGEST_ADD_INCORRECT:
            return { ...state, incorrect: [...state.incorrect, action.incorrect] }
        case ActionTypes.SUGGEST_REMOVE_INCORRECT:
            return { ...state, incorrect: state.incorrect.filter(answer => answer !== action.incorrect) }
        case ActionTypes.SUGGEST_RESET_FORM:
            return { ...state, text: initialState.text, correct: initialState.correct, incorrect: initialState.incorrect }
        default:
            return state
    }
}