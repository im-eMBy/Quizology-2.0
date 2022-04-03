import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "./state/action-creators";
import { RootState } from "./state/reducers";
import { bindActionCreators } from "redux";
import { QuizInfo } from "./shared/types";

import { onAuthStateChanged } from "firebase/auth";
import { logoutUser } from "./firebase/auth/logout";
import { getUserObject } from "./firebase/auth/userObject";
import { auth } from "./firebase/init";
import { getQuizzesInfo } from "./firebase/quizzesInfo";

import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { UserNameForm } from "./components/UserNameForm";
import { Login } from "./pages/Login";
import { Profile } from "./pages/Profile";
import { Play } from "./pages/Play";
import { Quiz } from "./pages/Quiz";
import { MyQuizzes } from "./pages/MyQuizzes";

import "./scss/index.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { page, isQuizActive, user } = useSelector((state: RootState) => state.app);
  const { appSetUser, appSetPage, appSetQuizzesInfo } = actionCreators;
  const [isLoaded, setIsLoaded] = useState(false);

  //auth
  useEffect(() => {
    const callback = bindActionCreators(appSetUser, dispatch);
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      console.log(user);
      if (user && !user.emailVerified) {
        logoutUser();
        return;
      }
      if (user && user.emailVerified === true) {
        await getUserObject(user, callback);
        dispatch(appSetPage("Play"));
      } else {
        dispatch(appSetUser(null));
      }
    });
    return unsubscribe;
  }, [appSetUser, appSetPage, dispatch]);
  //app data
  useEffect(() => {
    const action = bindActionCreators(appSetQuizzesInfo, dispatch);
    const callback = (quizInfo: QuizInfo[]) => {
      action(quizInfo);
      setIsLoaded(true);
    }
    getQuizzesInfo(callback);
  }, [appSetQuizzesInfo, dispatch]);

  const getContent = (): JSX.Element => {
    if (!isLoaded) return <h1>Loading</h1>
    if (user?.name === "Gość") return <UserNameForm />
    switch (page) {
      case "Play":
        return <Play />
      case "MyQuizzes":
        return <MyQuizzes />
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