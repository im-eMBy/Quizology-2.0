import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../init";

export const registerUser = (email: string, password: string, msgCallback: Function) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            sendEmailVerification(user);
            msgCallback("Na podany adres został wysłany e-mail weryfikacyjny");
        })
        .catch((error) => {
            console.log(error.message);
            msgCallback(error.code);
        });

}