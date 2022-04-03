import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { quizReducer } from "./quizReducer";
import { manageQuizReducer } from "./manageQuizReducer";

export const reducers = combineReducers({
    app: appReducer,
    quiz: quizReducer,
    manageQuiz: manageQuizReducer
})

export type RootState = ReturnType<typeof reducers>;