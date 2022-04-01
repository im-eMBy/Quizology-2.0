import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { setUserName } from "../firebase/auth/setUserName";
import { actionCreators } from "../state/action-creators";
import { RootState } from "../state/reducers";

import "../scss/_user-name-form.scss";

export const UserNameForm: React.FC = () => {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.app.user);
    const { appSetUser } = bindActionCreators(actionCreators, dispatch);
    const [name, setName] = useState<string>("")

    const handleSaveClick = async () => {
        if (name.length < 3) return;
        if (!user) return;
        await setUserName(user.uid, name);
        appSetUser({ ...user, name: name });
    }

    return <div className="user-name-form__container container">
        <p>Cześć! Podaj swoje imie lub nazwę użytkownika pod jaką chcesz być widoczny.</p>
        <p> Minimalna długość to 3 znaki, nazwy użytkownika nie można zmienić.</p>
        <input type="text" value={name} onChange={(ev) => setName(ev.target.value)} />
        <button onClick={handleSaveClick}>Zapisz</button>
    </div>
}