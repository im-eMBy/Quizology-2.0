import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';

export const AdminNavigation: React.FC = () => {
    const dispatch = useDispatch();
    const { adminSetSubPage } = bindActionCreators(actionCreators, dispatch);

    return <nav className="admin__navigation">
        <ul>
            <li className="admin__navigation-element">
                <button onClick={() => adminSetSubPage("Propositions")}>Propozycje</button>
            </li>
            <li className="admin__navigation-element">
                <button onClick={() => adminSetSubPage("Categories")}>Kategorie</button>
            </li>
            <li className="admin__navigation-element">
                <button onClick={() => adminSetSubPage("AddCategory")}>Dodaj Kategorię</button>
            </li>
        </ul>
    </nav>
}