import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
import { initializeApp } from "firebase/app";

import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyAlyith7ZQTddPGi4Wx3n65MM1dfkK2EZA",
  authDomain: "react-ecommerce-cdb29.firebaseapp.com",
  projectId: "react-ecommerce-cdb29",
  storageBucket: "react-ecommerce-cdb29.appspot.com",
  messagingSenderId: "68828260851",
  appId: "1:68828260851:web:e2e2d232f18f0b29a68a86"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


;
