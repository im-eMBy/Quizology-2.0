import { Question, Quiz, QuizInfo, UserObject } from "../shared/types";

export enum ActionTypes {
    APP_SET_PAGE = "appSetPage",
    APP_SET_QUIZ_ACTIVE = "appSetQuizActive",
    APP_SET_USER = "appSetUser",
    APP_SET_QUIZZES_INFO = "appSetQuizzesInfo",

    MANAGE_QUIZ_SET_SUBPAGE = "manageQuizSetSubpage",
    MANAGE_QUIZ_SET_QUIZ = "manageQuizSetQuiz",
    MANAGE_QUIZ_SET_EDITED_QUESTION = "manageQuizSetEditedQuestion",

    QUIZ_INIT = "quizInit",
    QUIZ_SET_QUIZ_OBJECT = "quizSetQuizObject",
    QUIZ_SET_QUESTIONS = "quizSetQuestions",
    QUIZ_SET_CURRENT_QUESTION = "quizSetCurrentQuestion",
    QUIZ_SET_IS_ANSWER_CLICKED = "quizSetIsAnswerClicked",
    QUIZ_TAKE_TIME = "quizTakeTime",
    QUIZ_ADD_CORRECT = "quizCorrect",
    QUIZ_ADD_INCORRECT = "quizIncorrect",
    QUIZ_ADD_ANSWER = "quizAddAnswer",
    QUIZ_END = "quizEnd",
    QUIZ_RESET = "quizReset",
}

//app
export type ActionAppSetPage = {
    type: ActionTypes.APP_SET_PAGE,
    page: string
}
export type ActionAppSetUser = {
    type: ActionTypes.APP_SET_USER,
    user: UserObject | null
}
export type ActionAppSetQuizzesInfo = {
    type: ActionTypes.APP_SET_QUIZZES_INFO,
    quizzesInfo: QuizInfo[]
}
export type ActionAppSetQuizActive = {
    type: ActionTypes.APP_SET_QUIZ_ACTIVE,
    isActive: boolean
}
//manage quiz
export type ActionManageQuizSetQuiz = {
    type: ActionTypes.MANAGE_QUIZ_SET_QUIZ,
    quiz: Quiz
}
export type ActionManageQuizSetSubpage = {
    type: ActionTypes.MANAGE_QUIZ_SET_SUBPAGE,
    subpage: string
}
export type ActionManageQuizSetEditedQuestion = {
    type: ActionTypes.MANAGE_QUIZ_SET_EDITED_QUESTION,
    question: Question
}
//quiz
export type ActionQuizInit = {
    type: ActionTypes.QUIZ_INIT,
    id: string,
    time: number,
    nrOfQuestions: number
}
export type ActionQuizSetQuizObject = {
    type: ActionTypes.QUIZ_SET_QUIZ_OBJECT,
    quiz: Quiz
}
export type ActionQuizSetQuestions = {
    type: ActionTypes.QUIZ_SET_QUESTIONS,
    questions: Question[]
}
export type ActionQuizSetCurrentQuestion = {
    type: ActionTypes.QUIZ_SET_CURRENT_QUESTION,
    currentQuestion: Question
}
export type ActionQuizSetIsAnswerClicked = {
    type: ActionTypes.QUIZ_SET_IS_ANSWER_CLICKED,
    isClicked: boolean
}
export type ActionQuizTakeTime = {
    type: ActionTypes.QUIZ_TAKE_TIME
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
export type ActionQuizReset = {
    type: ActionTypes.QUIZ_RESET
}

export type ManageQuizAction = ActionManageQuizSetQuiz | ActionManageQuizSetSubpage | ActionManageQuizSetEditedQuestion

export type AppAction = ActionAppSetPage | ActionAppSetQuizActive | ActionAppSetUser | ActionAppSetQuizzesInfo

export type QuizAction = ActionQuizInit | ActionQuizSetQuestions | ActionQuizSetCurrentQuestion | ActionQuizSetIsAnswerClicked | ActionQuizTakeTime | ActionQuizAddCorrect | ActionQuizAddIncorrect | ActionQuizAddAnswer | ActionQuizEnd | ActionQuizReset | ActionQuizSetQuizObject

export type Action = AppAction | QuizAction | ManageQuizAction