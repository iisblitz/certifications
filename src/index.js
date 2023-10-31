import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import Front1 from "./pages/Front1"
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="/certifications">
  <NavBar/>
  <Routes>
    <Route exact path="/" element={<App/>}/>
    <Route path="/Front1" element={<Front1/>}/>

  </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
