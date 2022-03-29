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
    questions: Question[],
    questionStats: []
}
export type QuizInfo = {
    id: string,
    authorId: string,
    author: string,
    title: string,
    description: string
}
export type UserObject = {
    uid: string,
    name: string,
    email: string,
    quizzes: string[],
    results: []
}



export type Category = {
    name: string,
    displayName: string,
    visible: boolean,
    playable: boolean
}
export type QuestionProposition = {
    category: string | null,
    displayedCategory: string | null,
    text: string,
    correct: string[],
    incorrect: string[]
}