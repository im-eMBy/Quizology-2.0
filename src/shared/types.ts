export type Question = {
    id?: string,
    text: string,
    correct: string[],
    incorrect: string[]
}
export type Quiz = {
    id: string,
    authorId: string,
    author: string,
    title: string,
    description: string,
    isVisible: boolean,
    questions: Question[],
    questionStats: []
}
export type QuizInfo = {
    id: string,
    authorId: string,
    author: string,
    title: string,
    description: string,
    isVisible: boolean
}
export type UserObject = {
    uid: string,
    name: string,
    email: string,
    quizzes: string[],
    results: []
}