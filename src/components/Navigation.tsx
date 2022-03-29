import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { RootState } from "../state/reducers";
import { authPagesData, unauthPagesData } from "../utilis/pages";

import { NavigationMobile } from "./NavigationMobile"

import "../scss/_navigation.scss";

export const Navigation: React.FC = () => {
    const dispatch = useDispatch();
    const { appSetPage } = bindActionCreators(actionCreators, dispatch);
    const { page, user } = useSelector((state: RootState) => state.app);
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
        appSetPage(elementClicked.value);
    }

    const getNavigationList = (): JSX.Element => {
        return <ul className="navigation__list">
            {(user ? authPagesData : unauthPagesData).map(el => <li className="navigation__element" key={el.name}>
                <button onClick={handleNavClick} value={el.name} style={page === el.name ? { color: "#eb9115" } : undefined}>{el.displayedName}</button>
            </li>)}
        </ul>
    }

    return <nav className="navigation">
        <button className="navigation__logo" onClick={() => appSetPage("Play")}><h1><span>Q</span>U<span>I</span>Z<span>O</span>L<span>O</span>G<span>Y</span></h1></button>
        {mobileNav ? <NavigationMobile /> : getNavigationList()}
    </nav>
}