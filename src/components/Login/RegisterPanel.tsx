import { FormEvent, useState } from "react";
import { registerUser } from "../../firebase/auth/register";

type Props = {
    switchToLogin: Function
}

export const RegisterPanel: React.FC<Props> = ({ switchToLogin }) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");
    const [msg, setMsg] = useState<string | null>(null);

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault();
        if (password !== passwordConfirmation) { setMsg("Podane hasła nie są identyczne"); return }
        if (password.length < 8) { setMsg("Hasło powinno mieć conajmniej 8 znaków"); return }
        registerUser(email, password, setMsg);
    }

    return <div className="register-panel__container container">
        <h2>Rejestracja</h2>
        <form className="register-panel__form" onSubmit={handleSubmit}>
            <label htmlFor="Email">Email:</label>
            <input id="Email" type="email" onChange={(ev) => setEmail(ev.target.value)} value={email} />
            <label htmlFor="Password">Hasło:</label>
            <input id="Password" type="password" onChange={(ev) => setPassword(ev.target.value)} value={password} />
            <label htmlFor="Password-confirmation">Potwierdź hasło:</label>
            <input id="Password-confirmation" type="password" onChange={(ev) => setPasswordConfirmation(ev.target.value)} value={passwordConfirmation} />
            <button type="submit">Zarejestruj</button>
            {msg !== null ? <p className="register-panel__msg">{msg}</p> : null}
        </form>
        <p>Masz już konto? <button onClick={() => switchToLogin()}>Zaloguj się</button></p>
    </div>
}