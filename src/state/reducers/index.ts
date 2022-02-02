import { combineReducers } from "redux";
import { appReducer } from './appReducer';
import { suggestReducer } from './suggestReducer'

export const  reducers = combineReducers({
    app: appReducer,
    suggest: suggestReducer
})

export type RootState = ReturnType<typeof reducers>;