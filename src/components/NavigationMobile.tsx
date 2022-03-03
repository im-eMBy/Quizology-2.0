import { useState, useRef } from "react";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';

export const NavigationMobile: React.FC = () => {
    const dispatch = useDispatch();
    const { appSetPage } = bindActionCreators(actionCreators, dispatch);
    const [menuOpen, setMenuOpen] = useState(false);

    const hamburgerElement = useRef<HTMLButtonElement>(null);

    const handleHamburgerClick = () => {
        setMenuOpen(!menuOpen);
        if (hamburgerElement.current) hamburgerElement.current.classList.toggle("navigation__hamburger--open");
    }
    const handleNavClick = (ev: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const elementClicked = ev.target as HTMLButtonElement;
        if(elementClicked.value === "Play" || elementClicked.value === "Suggest") {
            appSetPage(elementClicked.value);
        }
        setMenuOpen(false);
    }

    return <>
        <button className="navigation__hamburger" ref={hamburgerElement} onClick={handleHamburgerClick}>
            <svg viewBox="0 0 18 15" width="24" height="24">
                <path className="hamburger--top" fill="#FFFFFF" d="M18,1.484c0,0.82-0.665,1.484-1.484,1.484H1.484C0.665,2.969,0,2.304,0,1.484l0,0C0,0.665,0.665,0,1.484,0 h15.031C17.335,0,18,0.665,18,1.484L18,1.484z" />
                <path className="hamburger--middle" fill="#FFFFFF" d="M18,7.516C18,8.335,17.335,9,16.516,9H1.484C0.665,9,0,8.335,0,7.516l0,0c0-0.82,0.665-1.484,1.484-1.484 h15.031C17.335,6.031,18,6.696,18,7.516L18,7.516z" />
                <path className="hamburger--bottom" fill="#FFFFFF" d="M18,13.516C18,14.335,17.335,15,16.516,15H1.484C0.665,15,0,14.335,0,13.516l0,0 c0-0.82,0.665-1.484,1.484-1.484h15.031C17.335,12.031,18,12.696,18,13.516L18,13.516z" />
            </svg>
        </button>
        <ul className="navigation__mobile-list" style={menuOpen ? { top: "70px", visibility: "visible" } : { top: "-100%", visibility: "hidden" }}>
            <li className="navigation__element">
                <button onClick={handleNavClick} value="Play">Graj</button>
            </li>
            <li className="navigation__element">
                <button onClick={handleNavClick} value="Suggest">Zaproponuj pytanie</button>
            </li>
        </ul>
    </>
}