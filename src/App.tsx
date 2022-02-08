import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "./state/action-creators";
import { RootState } from "./state/reducers";

import { getCategories } from "./firebase/categories";

import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { SuggestQuestion } from "./pages/SuggestQuestion";
import { AdminPanel } from "./pages/AdminPanel";

import "./scss/index.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { page } = useSelector((state: RootState) => state.app);
  const { appSetCategories } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getCategories(appSetCategories);
  }, []) // eslint-disable-line react-hooks/exhaustive-deps

  const getContent = (): JSX.Element => {
    switch (page) {
      case "Play":
        return <h1>Play</h1>
      case "Suggest":
        return <SuggestQuestion />
      case "Admin":
        return <AdminPanel />
      default:
        return <h1>Play</h1>
    }
  }

  return <>
    <Navigation />
    <main className="main">
      {getContent()}
    </main>
    <Footer />
  </>
}

export default App;