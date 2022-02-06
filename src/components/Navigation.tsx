import { useSelector } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';
import { useDispatch } from 'react-redux';
import { RootState } from "../state/reducers";

import "../scss/_navigation.scss";

export const Navigation: React.FC = () => {
    const dispatch = useDispatch();
    const { appSetPage } = bindActionCreators(actionCreators, dispatch);
    const { page } = useSelector((state: RootState) => state.app);
    return <nav className="navigation">
        <h1 className="navigation__logo"><span>Q</span>U<span>I</span>Z<span>O</span>L<span>O</span>G<span>Y</span></h1>
        <ul>
            <li className="navigation__element">
                <button onClick={() => appSetPage("Play")}>Graj</button>
            </li>
            <li className="navigation__element">
                <button onClick={() => appSetPage("Suggest")}>Zaproponuj pytanie</button>
            </li>
            <li className="navigation__element">
                <button onClick={() => appSetPage("Admin")}>Admin</button>
            </li>
        </ul>
    </nav>
}