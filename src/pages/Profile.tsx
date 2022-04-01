import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { logoutUser } from "../firebase/auth/logout"
import { actionCreators } from "../state/action-creators";

export const Profile: React.FC = () => {
    const dispatch = useDispatch();
    const { appSetPage } = bindActionCreators(actionCreators, dispatch);

    const handleLogoutClick = () => {
        logoutUser();
        appSetPage("Play");
    }

    return <div className="profile__container container">
        <button onClick={handleLogoutClick}>Wyloguj</button>
    </div>
}