import React from "react";
import {Route, BrowserRouter as Router, Link } from 'react-router-dom'; 
// import Calculator from "./components/Calculator";
import Home from "./components/Home";
import './App.css';
import Calculator from "./components/Calculator";

function App() {
return (
    <div className="App">
      <Router>
        <nav className="navbar">
          <ul>
              <li> <Link to="/">Home</Link></li>
              <li><Link to="/calculator">Dr's Calculator</Link></li>
          </ul>
        </nav>
        <Route path="/" exact component={Home} />
        <Route path="/calculator" component={Calculator} />
      </Router>
    </div>
  );
}

export default App;
