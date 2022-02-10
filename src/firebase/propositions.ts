import { doc, updateDoc, arrayUnion, arrayRemove, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../index";
import { QuestionProposition } from "../shared/types";

export const addProposition = (propostion: QuestionProposition) => {
    updateDoc(doc(db, "propositions", "propositions"), {
        propositions: arrayUnion(propostion)
    })
}
export const getPropositionsAndListen = (callback: Function) => {
    const call = (data:any) => {
        console.log(data)
        callback(data.propositions);
    }
    const unsubscribe = onSnapshot(doc(db, "propositions", "propositions"), (doc) => {
        call(doc.data());
    })
    return unsubscribe;
}