import { doc, updateDoc, arrayUnion, arrayRemove, getDoc, setDoc } from "firebase/firestore";
import { db } from "./init";
import { Category } from "../shared/types";

export const addCategory = (category: Category) => {
    updateDoc(doc(db, "categories", "categories"), {
        categories: arrayUnion(category)
    })
    setDoc(doc(db, "questions", category.name), {
        questions: []
    })
}
export const getCategories = async () => {
    const docSnap = await getDoc(doc(db, "categories", "categories"));
    if (docSnap.exists()) {
        const categories = docSnap.data().categories;
        return categories;
    }
}
export const deleteCategory = (category: Category) => {
    updateDoc(doc(db, "categories", "categories"), {
        categories: arrayRemove(category)
    })
}