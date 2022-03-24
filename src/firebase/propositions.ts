import { doc, updateDoc, arrayUnion, arrayRemove, onSnapshot } from "firebase/firestore";
import { db } from "./init";
import { QuestionProposition } from "../shared/types";

export const addProposition = (propostion: QuestionProposition) => {
    updateDoc(doc(db, "propositions", "propositions"), {
        propositions: arrayUnion(propostion)
    })
}
export const getPropositionsAndListen = (callback: Function) => {
    const call = (data: any) => {
        callback(data.propositions);
    }
    const unsubscribe = onSnapshot(doc(db, "propositions", "propositions"), (doc) => {
        call(doc.data());
    })
    return unsubscribe;
}
export const deleteProposition = (proposition: QuestionProposition) => {
    updateDoc(doc(db, "propositions", "propositions"), {
        propositions: arrayRemove(proposition)
    })
}