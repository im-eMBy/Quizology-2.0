import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../../state/action-creators";
import { RootState } from "../../state/reducers";

import { getCategories, deleteCategory } from "../../firebase/categories";

export const AdminCategories: React.FC = () => {
    const dispatch = useDispatch();
    const { categories } = useSelector((state: RootState) => state.app);
    const { appSetCategories } = actionCreators;

    useEffect(() => {
        const fetchCategories = async () => {
            const categories = await getCategories();
            dispatch(appSetCategories(categories));
        }
        fetchCategories()
            .catch(console.error);
    }, [appSetCategories, dispatch])

    const getCategoriesDisplayed = (): JSX.Element[] => {
        return categories.map(category => <div className="admin__category container" key={category.name}>
            <h3>{category.displayName}</h3>
            <p>{category.visible ? "Widoczna" : "Niewidoczna"}</p>
            <p>{category.visible ? "Grywalna" : "Niegrywalna"}</p>
            <button onClick={() => deleteCategory(category)}>Usuń</button>
        </div>)
    }

    return <div className="admin__categories-container">
        {getCategoriesDisplayed()}
    </div>
}