import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { logoutUser } from "../firebase/auth/logout"
import { actionCreators } from "../state/action-creators";
import { RootState } from "../state/reducers";

import "../scss/_profile.scss";

export const Profile: React.FC = () => {
    const dispatch = useDispatch();
    const { appSetPage } = bindActionCreators(actionCreators, dispatch);
    const user = useSelector((state: RootState) => state.app.user)

    const handleLogoutClick = () => {
        logoutUser();
        appSetPage("Play");
    }

    return <div className="profile__container container">
        <p>Zalogowano jako: {user?.name}</p>
        <button className="profile__logout-button" onClick={handleLogoutClick}>Wyloguj</button>
    </div>
}