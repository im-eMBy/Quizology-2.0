import { Question, Quiz } from "../../shared/types";
import { ActionTypes, ManageQuizAction } from "../action-types";

interface ManageQuizState {
    quiz: Quiz | null,
    subpage: string,
    editedQuestion: Question | undefined
}

const initialState: ManageQuizState = {
    quiz: null,
    subpage: "Questions",
    editedQuestion: undefined
}

export const manageQuizReducer = (state: ManageQuizState = initialState, action: ManageQuizAction) => {
    switch (action.type) {
        case ActionTypes.MANAGE_QUIZ_SET_QUIZ:
            return { ...state, quiz: action.quiz }
        case ActionTypes.MANAGE_QUIZ_SET_SUBPAGE:
            return { ...state, subpage: action.subpage }
        case ActionTypes.MANAGE_QUIZ_SET_EDITED_QUESTION:
            return { ...state, editedQuestion: action.question }
        default:
            return state
    }
}