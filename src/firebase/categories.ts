import { doc, updateDoc, arrayUnion, arrayRemove, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../index";
import { Category } from "../shared/types";

export const addCategory = (category: Category) => {
    updateDoc(doc(db, "categories", "categories"), {
        categories: arrayUnion(category)
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