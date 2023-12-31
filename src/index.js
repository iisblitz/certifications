import './index.css';
import App from './App';
import React from 'react';
import Default from './pages/Default'
import ReactDOM from 'react-dom/client';
import FrontEndReact from './pages/FrontEndReact'
import FrontEndAngular from './pages/FrontEndAngular'
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import GDP from "./pages/DataVisualization/GDP"
import Pomodoro from "./pages/FrontEnd-React/Pomodoro"
import DrumMachine from "./pages/FrontEnd-React/DrumMachine"
import RandomQuote from "./pages/FrontEnd-React/RandomQuote"
import HeatMap from './pages/DataVisualization/HeatMap';
import DataVisualization from './pages/DataVisualization'
import ChoroplethMap from './pages/DataVisualization/ChoroplethMap'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import JavaScriptCalculator from './pages/FrontEnd-React/JavaScriptCalculator';
import BuildaMarkdownPreviewer from "./pages/FrontEnd-React/BuildaMarkdownPreviewer"
import DopingInProfessionalBicyleRacing from "./pages/DataVisualization/DopingInProfessionalBicyleRacing"
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router basename="/certifications">
  <NavBar/>
  <Routes>
    <Route exact path="/" element={<App/>}/>
    {/*frontend projects directory*/}
    <Route path="/FrontEnd-React" element={<FrontEndReact/>}/>
    <Route path='/FrontEnd-React/RandomQuote' element={<RandomQuote/>}></Route>
    <Route path='/FrontEnd-React/BuildaMarkdownPreviewer' element={<BuildaMarkdownPreviewer/>}></Route>
    <Route path='/FrontEnd-React/DrumMachine' element={<DrumMachine/>}></Route>
    <Route path='/FrontEnd-React/JavaScriptCalculator' element={<JavaScriptCalculator/>}></Route>
    <Route path='/FrontEnd-React/Pomodoro' element={<Pomodoro/>}></Route>

{/*frontend projects directory*/}
    <Route path="/FrontEnd-Angular" element={<FrontEndAngular/>}/>
    
    <Route path='/FrontEnd-Angular/RandomQuote' element={<RandomQuote/>}></Route>
    <Route path='/FrontEnd-Angular/BuildaMarkdownPreviewer' element={<BuildaMarkdownPreviewer/>}></Route>
    <Route path='/FrontEnd-Angular/DrumMachine' element={<DrumMachine/>}></Route>
    <Route path='/FrontEnd-Angular/JavaScriptCalculator' element={<JavaScriptCalculator/>}></Route>
    <Route path='/FrontEnd-Angular/Pomodoro' element={<Pomodoro/>}></Route>


    {/*data visualization projects directory */}
    <Route path="/DataVisualization" element={<DataVisualization/>}/>
    <Route path="/DataVisualization/GDP" element={<GDP/>}/>
    <Route path= "/DataVisualization/DopingInProfessionalBicyleRacing" element={<DopingInProfessionalBicyleRacing/>}/>
    <Route path="/DataVisualization/HeatMap" element={<HeatMap/>}/>
    <Route path="/DataVisualization/ChoroplethMap" element={<ChoroplethMap/>}/>
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
