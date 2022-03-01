import { useCallback, useEffect, useState } from "react"

export const useSuggestValidation = (text: string, correct: string[], incorrect: string[]) => {
    const [msgs, setMsgs] = useState<string[]>([]);

    const addDeleteMsg = useCallback((isValid: boolean, msg: string) => {
        if (isValid) {
            if (msgs.includes(msg)) {
                setMsgs((prev: string[]) => prev.filter((el: string) => el !== msg));
                return;
            }
            return;
        }
        if (msgs.includes(msg)) return;
        setMsgs((prev: string[]) => [...prev, msg]);
    }, [msgs]);

    //minimal question length
    useEffect(() => {
        const msg = "Minimalna długość pytania to 10 znaków";
        const isValid = text.length >= 10;
        addDeleteMsg(isValid, msg);
    }, [text, addDeleteMsg]);
    //minimum 1 correct answer
    useEffect(() => {
        const msg = "Dodaj minimum 1 poprawną odpowiedź";
        const isValid = correct.length > 0;
        addDeleteMsg(isValid, msg);
    }, [correct, addDeleteMsg]);
    //minimum 3 incorrect answers
    useEffect(() => {
        const msg = "Dodaj minimum 3 niepoprawne odpowiedzi";
        const isValid = incorrect.length >= 3;
        addDeleteMsg(isValid, msg);
    }, [incorrect, addDeleteMsg]);
    //maximum answer length
    useEffect(() => {
        const msg = "Jedna z odpowiedzi przekracza maksymalną długość 30 znaków";
        const isValid = (correct.findIndex(answer => answer.length > 30) === -1 && incorrect.findIndex(answer => answer.length > 30) === -1);
        addDeleteMsg(isValid, msg);
    }, [correct, incorrect, addDeleteMsg]);
    //no reapeted answers
    useEffect(() => {
        const msg = "Jedna z odpowiedzi się powtarza";
        const isValid = (correct.filter((answer, i, array) => array.indexOf(answer) !== i).length === 0 && incorrect.filter((answer, i, array) => array.indexOf(answer) !== i).length === 0);
        addDeleteMsg(isValid, msg);
    }, [correct, incorrect, addDeleteMsg]);
    //same answer as correct and incorrect
    useEffect(() => {
        const msg = "Dodano taką samą odpowiedź jako poprawną i niepoprawną";
        const isValid = correct.findIndex(answer => incorrect.includes(answer)) === -1;
        addDeleteMsg(isValid, msg);
    }, [correct, incorrect, addDeleteMsg]);

    return msgs;
}