import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./state/reducers";

import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { SuggestQuestion } from "./pages/SuggestQuestion";
import { AdminPanel } from "./pages/AdminPanel";

import "./scss/index.scss";

const App: FC = () => {
  const { page } = useSelector((state: RootState) => state.app);

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