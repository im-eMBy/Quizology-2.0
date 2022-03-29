import { logoutUser } from "../firebase/auth/logout"

export const Profile: React.FC = () => {


    return <div className="profile__container">
        <button onClick={logoutUser}>Wyloguj</button>
    </div>
}