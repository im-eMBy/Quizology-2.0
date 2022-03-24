import { FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state/action-creators";
import { singIn } from "../../firebase/auth/sing-in";


import "../../scss/components/_login.scss";

export const Login: React.FC = () => {
    const dispatch = useDispatch();
    const { appSetPage } = actionCreators;
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [msg, setMsg] = useState<string | null>(null);

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault();
        singIn(email, password, setMsg);
    }

    return <div className="container login__container">
        <form className="login__form" onSubmit={handleSubmit}>
            <label htmlFor="Email">Email:</label>
            <input id="Email" type="email" onChange={(ev) => setEmail(ev.target.value)} value={email} />
            <label htmlFor="Password">Hasło:</label>
            <input id="Password" type="password" onChange={(ev) => setPassword(ev.target.value)} value={password} />
            <button type="submit">Zaloguj</button>
            {msg !== null ? <p className="login__msg">{msg}</p> : null}
        </form>
        <p>Nie masz konta? <button onClick={() => dispatch(appSetPage("Register"))}>Zarejestruj się</button></p>
    </div>
}