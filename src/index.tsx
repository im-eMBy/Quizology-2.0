import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from "./state/store";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


//FIREBASE INIT
const firebaseConfig = {
  apiKey: "AIzaSyD4Vh-Z6AWXgOOnwKlU77gAGG39cVZL0rE",
  authDomain: "quizology-7a3a4.firebaseapp.com",
  projectId: "quizology-7a3a4",
  storageBucket: "quizology-7a3a4.appspot.com",
  messagingSenderId: "668641186513",
  appId: "1:668641186513:web:fbc74f9e506e3f8c85ebf0",
  measurementId: "G-KWQGWS0GV0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();

//REACT RENDER
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);