import { useState } from "react";
import { RegisterPanel } from "../components/Login/RegisterPanel";
import { LoginPanel } from "../components/Login/LoginPanel";

import "../scss/_login.scss";

export const Login: React.FC = () => {
    const [isNewUser, setIsNewUser] = useState<boolean>(false);

    const handleSwitchToLogin = () => {
        setIsNewUser(false);
    }
    const handleSwitchToRegister = () => {
        setIsNewUser(true);
    }

    return (isNewUser ? <RegisterPanel switchToLogin={handleSwitchToLogin} /> : <LoginPanel switchToRegister={handleSwitchToRegister} />)
}