import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { suggestReducer } from "./suggestReducer";
import { adminReducer } from "./adminReducer";

export const  reducers = combineReducers({
    app: appReducer,
    suggest: suggestReducer,
    admin: adminReducer
})

export type RootState = ReturnType<typeof reducers>;