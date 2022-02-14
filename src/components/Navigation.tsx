import { useState, useEffect } from "react";
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
    const [mobileMenu, setMobileMenu] = useState<boolean>(window.matchMedia("(max-width: 800px)").matches);

    useEffect(() => {
        const windowWatcher = window.matchMedia("(max-width: 800px)");
        const change = (ev: MediaQueryListEvent) => setMobileMenu(ev.matches);
        windowWatcher.addEventListener("change", change);
        return () => {
            windowWatcher.removeEventListener("change", change);
        }
    }, [])

    const getNavigationList = (): JSX.Element => {
        return <ul className="navigation__list">
            <li className="navigation__element">
                <button onClick={() => appSetPage("Play")} style={page === "Play" ? {backgroundColor: "#D7AF70"} : undefined}>Graj</button>
            </li>
            <li className="navigation__element">
                <button onClick={() => appSetPage("Suggest")} style={page === "Suggest" ? {backgroundColor: "#D7AF70"} : undefined}>Zaproponuj pytanie</button>
            </li>
        </ul>
    }

    return <nav className="navigation">
        <button className="navigation__logo" onClick={() => appSetPage("Play")}><h1><span>Q</span>U<span>I</span>Z<span>O</span>L<span>O</span>G<span>Y</span></h1></button>
        {mobileMenu ? <NavigationMobile /> : getNavigationList()}
    </nav>
}