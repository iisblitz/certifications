import './index.css';
import App from './App';
import React from 'react';
import Default from './pages/Default'
import ReactDOM from 'react-dom/client';
import FrontEnd from './pages/FrontEnd'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import GDP from "./pages/DataVisualization/GDP"
import Pomodoro from "./pages/FrontEnd/Pomodoro"
import DrumMachine from "./pages/FrontEnd/DrumMachine"
import RandomQuote from "./pages/FrontEnd/RandomQuote"
import HeatMap from './pages/DataVisualization/HeatMap';
import DataVisualization from './pages/DataVisualization'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import JavaScriptCalculator from './pages/FrontEnd/JavaScriptCalculator';
import BuildaMarkdownPreviewer from "./pages/FrontEnd/BuildaMarkdownPreviewer"
import DopingInProfessionalBicyleRacing from "./pages/DataVisualization/DopingInProfessionalBicyleRacing"

//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="/certifications">
  <NavBar/>
  <Routes>
    <Route exact path="/" element={<App/>}/>
    {/*frontend projects directory*/}
    <Route path="/FrontEnd" element={<FrontEnd/>}/>
    <Route path='/FrontEnd/RandomQuote' element={<RandomQuote/>}></Route>
    <Route path='/FrontEnd/BuildaMarkdownPreviewer' element={<BuildaMarkdownPreviewer/>}></Route>
    <Route path='/FrontEnd/DrumMachine' element={<DrumMachine/>}></Route>
    <Route path='/FrontEnd/JavaScriptCalculator' element={<JavaScriptCalculator/>}></Route>
    <Route path='/FrontEnd/Pomodoro' element={<Pomodoro/>}></Route>

    {/*data visualization projects directory */}
    <Route path="/DataVisualization" element={<DataVisualization/>}/>
    <Route path="/DataVisualization/GDP" element={<GDP/>}/>
    <Route path= "/DataVisualization/DopingInProfessionalBicyleRacing" element={<DopingInProfessionalBicyleRacing/>}/>
    <Route path="/DataVisualization/HeatMap" element={<HeatMap/>}/>

    {/*default path for undefined*/}
    <Route path='*' element={<Default/>}></Route>
  </Routes>
  <Footer/>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
