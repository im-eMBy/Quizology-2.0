import { useDispatch } from "react-redux";
import { actionCreators } from '../state/action-creators';
import { bindActionCreators } from 'redux';

import "../scss/_footer.scss";

export const Footer: React.FC = () => {
    const dispatch = useDispatch();
    const { appSetPage } = bindActionCreators(actionCreators, dispatch);

    return <footer className="footer">
        <p>Created by Michał Bieńko</p>
        <button onClick={() => appSetPage("Admin")}>A</button>
    </footer>
}