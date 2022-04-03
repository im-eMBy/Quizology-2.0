import { logoutUser } from "../../firebase/auth/logout"

export const LogoutButton = () => {

    return <button onClick={logoutUser}>Wyloguj</button>
}