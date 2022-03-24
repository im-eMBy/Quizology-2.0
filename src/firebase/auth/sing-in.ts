import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../init";

export const singIn = (email: string, password: string, msgCallback: Function) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential.user);
        })
        .catch((error) => {
            console.log(error.message);
            msgCallback(error.code);
        });

}