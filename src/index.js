import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYhFGZw9G2y8e0bofNA-lM0Qw-of8uBgw",
  authDomain: "cart-26f89.firebaseapp.com",
  projectId: "cart-26f89",
  storageBucket: "cart-26f89.appspot.com",
  messagingSenderId: "930940628033",
  appId: "1:930940628033:web:50078beef9bfb3dbc5eac0"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
export const db = firebase.firestore();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
