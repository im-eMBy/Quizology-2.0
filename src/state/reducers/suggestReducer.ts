import { QuestionProposition } from "../../shared/types";
import { ActionTypes, SuggestAction } from "../action-types";

const initialState: QuestionProposition = {
    category: null,
    text: "",
    correct: [],
    incorrect: []
}

export const suggestReducer = (state: QuestionProposition = initialState, action: SuggestAction) => {
    switch (action.type) {
        case ActionTypes.SUGGEST_SET_CATEGORY:
            return { ...state, category: action.category }
        case ActionTypes.SUGGEST_SET_TEXT:
            return { ...state, text: action.text }
        case ActionTypes.SUGGEST_ADD_CORRECT:
            return { ...state, correct: [...state.correct, action.correct] }
        case ActionTypes.SUGGEST_REMOVE_CORRECT:
            return { ...state, correct: state.correct.filter(answer => answer !== action.correct) }
        default:
            return state
    }
}