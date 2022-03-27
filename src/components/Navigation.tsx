import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { RootState } from "../state/reducers";

import { NavigationMobile } from "./NavigationMobile"

import "../scss/_navigation.scss";

export const Navigation: React.FC = () => {
    const dispatch = useDispatch();
    const { appSetPage } = bindActionCreators(actionCreators, dispatch);
    const { page } = useSelector((state: RootState) => state.app);
    const [mobileNav, setMobileNav] = useState<boolean>(window.matchMedia("(max-width: 800px)").matches);

    useEffect(() => {
        const windowWatcher = window.matchMedia("(max-width: 800px)");
        const change = (ev: MediaQueryListEvent) => setMobileNav(ev.matches);
        windowWatcher.addEventListener("change", change);
        return () => {
            windowWatcher.removeEventListener("change", change);
        }
    }, [])

    const handleNavClick = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const elementClicked = ev.target as HTMLButtonElement;
        if (elementClicked.value === "Play" || elementClicked.value === "Suggest" || elementClicked.value === "Profile") {
            appSetPage(elementClicked.value);
        }
    }

    const getNavigationList = (): JSX.Element => {
        return <ul className="navigation__list">
            <li className="navigation__element">
                <button onClick={handleNavClick} value="Play" style={page === "Play" ? { color: "#eb9115" } : undefined}>Graj</button>
            </li>
            <li className="navigation__element">
                <button onClick={handleNavClick} value="Suggest" style={page === "Suggest" ? { color: "#eb9115" } : undefined}>Zaproponuj pytanie</button>
            </li>
            <li className="navigation__element">
                <button onClick={handleNavClick} value="Profile" style={page === "Profile" ? { color: "#eb9115" } : undefined}>Profil</button>
            </li>
        </ul>
    }

    return <nav className="navigation">
        <button className="navigation__logo" onClick={() => appSetPage("Play")}><h1><span>Q</span>U<span>I</span>Z<span>O</span>L<span>O</span>G<span>Y</span></h1></button>
        {mobileNav ? <NavigationMobile /> : getNavigationList()}
    </nav>
}