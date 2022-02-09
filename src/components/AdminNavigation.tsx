import { useSelector, useDispatch } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';

export const AdminNavigation: React.FC = () => {
    const dispatch = useDispatch();
    const { appSetAdminSubPage } = bindActionCreators(actionCreators, dispatch);

    return <nav className="admin__navigation">
        <ul>
            <li className="admin__navigation-element">
                <button onClick={() => appSetAdminSubPage("Propositions")}>Propozycje</button>
            </li>
            <li className="admin__navigation-element">
                <button onClick={() => appSetAdminSubPage("Categories")}>Kategorie</button>
            </li>
            <li className="admin__navigation-element">
                <button onClick={() => appSetAdminSubPage("AddCategory")}>Dodaj Kategorię</button>
            </li>
        </ul>
    </nav>
}