import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from "./components/NavBar";
import Front from "./pages/Front"
import FrontEnd from "./pages/FrontEnd";
import Footer from "./components/Footer";
import './index.css';
import RandomQuote from "./pages/RandomQuote"
import BuildaMarkdownPreviewer from "./pages/BuildaMarkdownPreviewer"
import DrumMachine from "./pages/DrumMachine"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="/certifications">
  <NavBar/>
  <Routes>
    <Route exact path="/" element={<App/>}/>
    <Route path="/FrontEnd" element={<FrontEnd/>}/>
    <Route path='/FrontEnd/:name' element={<Front/>}></Route>
    <Route path='/FrontEnd/RandomQuote' element={<RandomQuote/>}></Route>
    <Route path='/FrontEnd/BuildaMarkdownPreviewer' element={<BuildaMarkdownPreviewer/>}></Route>
    <Route path='/FrontEnd/DrumMachine' element={<DrumMachine/>}></Route>
    
  </Routes>
  <Footer/>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
