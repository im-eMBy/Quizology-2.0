import { signOut } from "firebase/auth";
import { auth } from "../init"

export const logoutUser = () => {
    signOut(auth)
        .catch((error) => {
            console.log(error.message);
        });
}