import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "./state/action-creators";
import { RootState } from "./state/reducers";

import { onAuthStateChanged } from "firebase/auth";
import { getUserObject } from "./firebase/auth/userObject";
import { auth } from "./firebase/init";
import { getCategories } from "./firebase/categories";

import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Register } from "./pages/Register";
import { Profile } from "./pages/Profile";
import { Play } from "./pages/Play";
import { SuggestQuestion } from "./pages/SuggestQuestion";
import { AdminPanel } from "./pages/AdminPanel";
import { Quiz } from "./pages/Quiz";

import "./scss/index.scss";
import { bindActionCreators } from "redux";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { page, isQuizActive, user } = useSelector((state: RootState) => state.app);
  const { appSetCategories, appSetUser } = actionCreators;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const callback = bindActionCreators(appSetUser, dispatch);
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.emailVerified === true) {
        getUserObject(user, callback);
      } else {
        dispatch(appSetUser(null));
      }
      return unsubscribe;
    });
  }, [appSetUser, dispatch]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories();
      dispatch(appSetCategories(categories));
      setIsLoaded(true);
    }
    fetchCategories()
      .catch(console.error);
  }, [appSetCategories, dispatch]);

  const getContent = (): JSX.Element => {
    if (!isLoaded) return <h1>Loading</h1>
    switch (page) {
      case "Play":
        return <Play />
      case "Suggest":
        return <SuggestQuestion />
      case "Admin":
        return <AdminPanel />
      case "Register":
        return <Register />
      case "Profile":
        return <Profile />
      default:
        return <Play />
    }
  }

  const navigation = useMemo((): JSX.Element => {
    return <Navigation />
  }, [])
  const footer = useMemo((): JSX.Element => {
    return <Footer />
  }, [])

  if (isQuizActive) return <Quiz />

  return <>
    {navigation}
    <main className="main">
      {getContent()}
    </main>
    {footer}
  </>
}

export default App;