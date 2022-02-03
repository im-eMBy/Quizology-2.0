export type Category = {
    name: string,
    displayName: string,
    visible: boolean,
    playable: boolean
}
export type Question = {
    text: string,
    correct: string[],
    incorrect: string[]
}
export type QuestionProposition = {
    category: string | null,
    displayedCategory: string | null,
    text: string,
    correct: string[],
    incorrect: string[]
}