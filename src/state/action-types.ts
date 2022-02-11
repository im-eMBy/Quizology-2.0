import { Category, QuestionProposition, Question } from "../shared/types";

export enum ActionTypes {
    APP_SET_PAGE = "appSetPage",
    APP_SET_QUIZ_ACTIVE = "appSetQuizActive",
    APP_SET_CATEGORIES = "appSetCategories",

    SUGGEST_SET_CATEGORY = "suggestSetCategory",
    SUGGEST_SET_DISPLAYED_CATEGORY = "suggestSetDisplayedCategory",
    SUGGEST_SET_TEXT = "suggestSetText",
    SUGGEST_ADD_CORRECT = "suggestAddCorrect",
    SUGGEST_REMOVE_CORRECT = "suggestRemoveCorrect",
    SUGGEST_ADD_INCORRECT = "suggestAddInorrect",
    SUGGEST_REMOVE_INCORRECT = "suggestRemoveInorrect",
    SUGGEST_RESET_FORM = "suggestResetForm",

    QUIZ_INIT = "quizInit",
    QUIZ_SET_QUESTIONS = "quizSetQuestions",
    QUIZ_SET_CURRENT_QUESTION = "quizSetCurrentQuestion",
    QUIZ_ADD_CORRECT = "quizCorrect",
    QUIZ_ADD_INCORRECT = "quizIncorrect",
    QUIZ_ADD_ANSWER = "quizAddAnswer",
    QUIZ_END = "quizEnd",

    ADMIN_SET_PASSWORD = "adminSetPassword",
    ADMIN_SET_SUB_PAGE = "adminSetSubPage",
}

//app
export type ActionAppSetPage = {
    type: ActionTypes.APP_SET_PAGE,
    page: "Play" | "Suggest" | "Admin"
}
export type ActionAppSetCategories = {
    type: ActionTypes.APP_SET_CATEGORIES,
    categories: Category[]
}
export type ActionAppSetQuizActive = {
    type: ActionTypes.APP_SET_QUIZ_ACTIVE,
    isActive: boolean
}
//suggest
export type ActionSuggestSetCategory = {
    type: ActionTypes.SUGGEST_SET_CATEGORY,
    category: string
}
export type ActionSuggestSetDisplayedCategory = {
    type: ActionTypes.SUGGEST_SET_DISPLAYED_CATEGORY,
    displayedCategory: string
}
export type ActionSuggestSetText = {
    type: ActionTypes.SUGGEST_SET_TEXT,
    text: string
}
export type ActionSuggestAddCorrect = {
    type: ActionTypes.SUGGEST_ADD_CORRECT,
    correct: string
}
export type ActionSuggestRemoveCorrect = {
    type: ActionTypes.SUGGEST_REMOVE_CORRECT,
    correct: string
}
export type ActionSuggestAddIncorrect = {
    type: ActionTypes.SUGGEST_ADD_INCORRECT,
    incorrect: string
}
export type ActionSuggestRemoveIncorrect = {
    type: ActionTypes.SUGGEST_REMOVE_INCORRECT,
    incorrect: string
}
export type ActionSuggestResetForm = {
    type: ActionTypes.SUGGEST_RESET_FORM
}
//quiz
export type ActionQuizInit = {
    type: ActionTypes.QUIZ_INIT,
    category: Category,
    time: number,
    nrOfQuestions: number
}
export type ActionQuizSetQuestions = {
    type: ActionTypes.QUIZ_SET_QUESTIONS,
    questions: Question[]
}
export type ActionQuizSetCurrentQuestion = {
    type: ActionTypes.QUIZ_SET_CURRENT_QUESTION,
    currentQuestion: Question
}
export type ActionQuizAddCorrect = {
    type: ActionTypes.QUIZ_ADD_CORRECT
}
export type ActionQuizAddIncorrect = {
    type: ActionTypes.QUIZ_ADD_INCORRECT
}
export type ActionQuizAddAnswer = {
    type: ActionTypes.QUIZ_ADD_CORRECT,
    answer: {}
}
export type ActionQuizEnd = {
    type: ActionTypes.QUIZ_END
}
//admin
export type ActionAdminSetSubPage = {
    type: ActionTypes.ADMIN_SET_SUB_PAGE,
    subpage: "Propositions" | "Categories" | "AddCategory"
}
export type ActionAdminSetPassword = {
    type: ActionTypes.ADMIN_SET_PASSWORD,
    password: string
}
export type AppAction = ActionAppSetPage | ActionAppSetCategories | ActionAppSetQuizActive

export type SuggestAction = ActionSuggestSetCategory | ActionSuggestSetDisplayedCategory | ActionSuggestSetText | ActionSuggestAddCorrect | ActionSuggestRemoveCorrect | ActionSuggestAddIncorrect | ActionSuggestRemoveIncorrect | ActionSuggestResetForm

export type AdminAction = ActionAdminSetSubPage | ActionAdminSetPassword

export type QuizAction = ActionQuizInit | ActionQuizSetQuestions | ActionQuizSetCurrentQuestion | ActionQuizAddCorrect | ActionQuizAddIncorrect | ActionQuizAddAnswer | ActionQuizEnd

export type Action = AppAction | SuggestAction | QuizAction | AdminAction