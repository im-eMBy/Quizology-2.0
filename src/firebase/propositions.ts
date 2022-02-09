import { doc, updateDoc, arrayUnion, arrayRemove, getDoc } from "firebase/firestore";
import { db } from "../index";
import { QuestionProposition } from "../shared/types";

export const addProposition = (propostion: QuestionProposition) => {
    updateDoc(doc(db, "propostions", "propostions"), {
        propostions: arrayUnion(propostion)
    })
}