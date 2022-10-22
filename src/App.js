import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import About from './About';
import Features from './Features';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route exact path='/testrouting' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/features' element={<Features/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
