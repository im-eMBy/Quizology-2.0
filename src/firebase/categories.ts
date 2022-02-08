import { doc, updateDoc, arrayUnion, arrayRemove, getDoc } from "firebase/firestore";
import { db } from "../index";
import { Category } from "../shared/types";

export const addCategory = (category: Category) => {
    updateDoc(doc(db, "categories", "categories"), {
        categories: arrayUnion(category)
    })
}

export const getCategories = async (callback: Function) => {
    const docSnap = await getDoc(doc(db, "categories", "categories"));
    if(docSnap.exists()) {
        const categories = docSnap.data().categories;
        callback(categories);
    }
}