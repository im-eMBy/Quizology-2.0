import { AddQuestion } from "../components/MyQuizzes/AddQuestion"
import { logoutUser } from "../firebase/auth/logout"

export const Profile: React.FC = () => {


    return <div className="profile__container">
        <button onClick={logoutUser}>Wyloguj</button>
        <AddQuestion />
    </div>
}