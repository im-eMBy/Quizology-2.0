import { User } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../init";

const createUserObject = async (user: User) => {
    await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: user.email,
        name: "Gość",
        quizzes: [],
        results: []
    })
}

export const getUserObject = async (user: User, callback: Function) => {
    const userDoc = await getDoc(doc(db, "users", user.uid));
    if (userDoc.exists()) {
        console.log(userDoc.data());
        callback(userDoc.data());
    } else {
        await createUserObject(user);
        getUserObject(user, callback);
    }
}