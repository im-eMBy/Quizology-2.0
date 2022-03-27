import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state/action-creators";
import { loginUser } from "../../firebase/auth/login";


import "../../scss/components/_login-panel.scss";

export const LoginPanel: React.FC = () => {
    const dispatch = useDispatch();
    const { appSetPage } = actionCreators;
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [msg, setMsg] = useState<string | null>(null);

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault();
        loginUser(email, password, setMsg);
    }

    return <div className="container login-panel__container">
        <h2>Zaloguj się</h2>
        <form className="login-panel__form" onSubmit={handleSubmit}>
            <label htmlFor="Email">Email:</label>
            <input id="Email" type="email" onChange={(ev) => setEmail(ev.target.value)} value={email} />
            <label htmlFor="Password">Hasło:</label>
            <input id="Password" type="password" onChange={(ev) => setPassword(ev.target.value)} value={password} />
            <button type="submit">Zaloguj</button>
            {msg !== null ? <p className="login-panel__msg">{msg}</p> : null}
        </form>
        <p>Nie masz konta? <button onClick={() => dispatch(appSetPage("Register"))}>Zarejestruj się</button></p>
    </div>
}