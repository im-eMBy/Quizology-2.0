import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "./state/action-creators";
import { RootState } from "./state/reducers";

import { getCategories } from "./firebase/categories";

import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Play } from "./pages/Play";
import { SuggestQuestion } from "./pages/SuggestQuestion";
import { AdminPanel } from "./pages/AdminPanel";
import { Quiz } from "./pages/Quiz";

import "./scss/index.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { page, isQuizActive } = useSelector((state: RootState) => state.app);
  const { appSetCategories } = actionCreators;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      dispatch(appSetCategories(categories));
      setIsLoaded(true);
    }
    fetchCategories()
      .catch(console.error);
  }, [appSetCategories, dispatch])

  const getContent = (): JSX.Element => {
    if (!isLoaded) return <h1>Loading</h1>
    switch (page) {
      case "Play":
        return <Play />
      case "Suggest":
        return <SuggestQuestion />
      case "Admin":
        return <AdminPanel />
      default:
        return <Play />
    }
  }

  const getNav = useMemo((): JSX.Element => {
    return <Navigation />
  }, [])
  const getFooter = useMemo((): JSX.Element => {
    return <Footer />
  }, [])

  if (isQuizActive) return <Quiz />

  return <>
    {getNav}
    <main className="main">
      {getContent()}
    </main>
    {getFooter}
  </>
}

export default App;