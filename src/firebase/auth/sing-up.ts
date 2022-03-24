import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../init";

export const singUp = (email: string, password: string, msgCallback: Function) => {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            sendEmailVerification(userCredential.user);
            msgCallback("Na podany adres został wysłany e-mail weryfikacyjny");
        })
        .catch((error) => {
            console.log(error.message);
            msgCallback(error.code);
        });

}