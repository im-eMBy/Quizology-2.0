import { useState } from "react"
import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux";
import { actionCreators } from '../state/action-creators';

export const AdminLogin: React.FC = () => {
    const dispatch = useDispatch();
    const { adminSetPassword } = bindActionCreators(actionCreators, dispatch);

    const [passwordInput, setPasswordInput] = useState<string>("")

    return <div className="admin__login">
        <div className="container">
            <h2>Podaj hasło:</h2>
            <input type="password" value={passwordInput} onChange={(ev) => setPasswordInput(ev.target.value)} />
            <button onClick={() => adminSetPassword(passwordInput)}>Zaloguj</button>
        </div>
    </div>
}