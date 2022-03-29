import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "./state/action-creators";
import { RootState } from "./state/reducers";
import { bindActionCreators } from "redux";

import { onAuthStateChanged } from "firebase/auth";
import { getUserObject } from "./firebase/auth/userObject";
import { auth } from "./firebase/init";
import { getQuizzesInfo } from "./firebase/quizzesInfo";
import { getCategories } from "./firebase/categories";

import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Play } from "./pages/Play";
import { SuggestQuestion } from "./pages/SuggestQuestion";
import { AdminPanel } from "./pages/AdminPanel";
import { Quiz } from "./pages/Quiz";
import { MyQuizzes } from "./pages/MyQuizzes";

import "./scss/index.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { page, isQuizActive } = useSelector((state: RootState) => state.app);
  const { appSetCategories, appSetUser, appSetPage, appSetQuizzesInfo } = actionCreators;
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const callback = bindActionCreators(appSetUser, dispatch);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user && user.emailVerified === true) {
        await getUserObject(user, callback);
        dispatch(appSetPage("Play"));
      } else {
        dispatch(appSetUser(null));
        dispatch(appSetPage("Login"));
      }
      return unsubscribe;
    });
  }, [appSetUser, appSetPage, dispatch]);

  useEffect(() => {
    const callback = bindActionCreators(appSetQuizzesInfo, dispatch);
    getQuizzesInfo(callback);
  }, [appSetQuizzesInfo, dispatch]);

  // useEffect(() => {
  //   const fetchCategories = async () => {
  //     const categories = await getCategories();
  //     dispatch(appSetCategories(categories));
  //     setIsLoaded(true);
  //   }
  //   fetchCategories()
  //     .catch(console.error);
  // }, [appSetCategories, dispatch]);

  const getContent = (): JSX.Element => {
    // if (!isLoaded) return <h1>Loading</h1>
    switch (page) {
      case "Play":
        return <Play />
      case "MyQuizzes":
        return <MyQuizzes />
      case "Admin":
        return <AdminPanel />
      case "Login":
        return <Login />
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