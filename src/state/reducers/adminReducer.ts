import { ActionTypes, AdminAction } from "../action-types";

interface AdminState {
    subpage: "Propositions" | "Categories" | "AddCategory",
    password: string
}

const initialState: AdminState = {
    subpage: "Categories",
    password: ""
}

export const adminReducer = (state: AdminState = initialState, action: AdminAction) => {
    switch (action.type) {
        case ActionTypes.ADMIN_SET_SUB_PAGE:
            return { ...state, subpage: action.subpage }
        case ActionTypes.ADMIN_SET_PASSWORD:
            return { ...state, password: action.password }
        default:
            return state
    }
}