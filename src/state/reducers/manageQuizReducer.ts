import { Quiz } from "../../shared/types";
import { ActionTypes, ManageQuizAction } from "../action-types";

interface ManageQuizState {
    quiz: Quiz | null,
    subpage: string
}

const initialState: ManageQuizState = {
    quiz: null,
    subpage: "Questions"
}

export const manageQuizReducer = (state: ManageQuizState = initialState, action: ManageQuizAction) => {
    switch (action.type) {
        case ActionTypes.MANAGE_QUIZ_SET_QUIZ:
            return { ...state, quiz: action.quiz }
        case ActionTypes.MANAGE_QUIZ_SET_SUBPAGE:
            return { ...state, subpage: action.subpage }
        default:
            return state
    }
}