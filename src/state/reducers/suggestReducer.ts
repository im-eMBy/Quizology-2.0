import { QuestionProposition } from "../../shared/types";
import { ActionTypes, SuggestAction } from "../action-types";

interface SuggestState {
    isValid: boolean,
    proposition: QuestionProposition
}

const initialState: SuggestState = {
    isValid: false,
    proposition: {
        category: null,
        displayedCategory: null,
        text: "",
        correct: [],
        incorrect: []
    }
}

export const suggestReducer = (state: SuggestState = initialState, action: SuggestAction) => {
    switch (action.type) {
        case ActionTypes.SUGGEST_SET_IS_VALID:
            return { ...state, isValid: action.isValid }
        case ActionTypes.SUGGEST_SET_CATEGORY:
            return { ...state, proposition: { ...state.proposition, category: action.category } }
        case ActionTypes.SUGGEST_SET_DISPLAYED_CATEGORY:
            return { ...state, proposition: { ...state.proposition, displayedCategory: action.displayedCategory } }
        case ActionTypes.SUGGEST_SET_TEXT:
            return { ...state, proposition: { ...state.proposition, text: action.text } }
        case ActionTypes.SUGGEST_ADD_CORRECT:
            return { ...state, proposition: { ...state.proposition, correct: [...state.proposition.correct, action.correct] } }
        case ActionTypes.SUGGEST_REMOVE_CORRECT:
            return { ...state, proposition: { ...state.proposition, correct: state.proposition.correct.filter(answer => answer !== action.correct) } }
        case ActionTypes.SUGGEST_ADD_INCORRECT:
            return { ...state, proposition: { ...state.proposition, incorrect: [...state.proposition.incorrect, action.incorrect] } }
        case ActionTypes.SUGGEST_REMOVE_INCORRECT:
            return { ...state, proposition: { ...state.proposition, incorrect: state.proposition.incorrect.filter(answer => answer !== action.incorrect) } }
        case ActionTypes.SUGGEST_RESET_FORM:
            return initialState;
        // return { ...state, text: initialState.text, correct: initialState.correct, incorrect: initialState.incorrect }
        default:
            return state
    }
}