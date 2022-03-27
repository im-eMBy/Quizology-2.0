import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../init";

export const loginUser = (email: string, password: string, msgCallback: Function) => {
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            if (user.emailVerified !== true) {
                msgCallback("Przed zalogowaniem potwierdź adres email, klikając w link, wysłany przez nas na twoją pocztę.");
            }
        })
        .catch((error) => {
            console.log(error.message);
            msgCallback(error.code);
        });

}