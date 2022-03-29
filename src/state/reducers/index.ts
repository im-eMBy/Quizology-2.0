import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { suggestReducer } from "./suggestReducer";
import { adminReducer } from "./adminReducer";
import { quizReducer } from "./quizReducer";
import { manageQuizReducer } from "./manageQuizReducer";

export const reducers = combineReducers({
    app: appReducer,
    suggest: suggestReducer,
    admin: adminReducer,
    quiz: quizReducer,
    manageQuiz: manageQuizReducer
})

export type RootState = ReturnType<typeof reducers>;