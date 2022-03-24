import { FormEvent, useState } from "react"

export const Login: React.FC = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const handleSubmit = (ev: FormEvent) => {
        ev.preventDefault();
    }

    return <div className="container login__container">
        <form className="login__form" onSubmit={handleSubmit}>
            <label htmlFor="Email">Email:</label>
            <input id="Email" type="email" onChange={(ev) => setEmail(ev.target.value)} value={email} />
            <label htmlFor="Password">Hasło:</label>
            <input id="Password" type="password" onChange={(ev) => setPassword(ev.target.value)} value={password} />
            <button type="submit"></button>
        </form>

    </div>
}