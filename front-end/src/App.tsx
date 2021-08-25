import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { WhoSigned } from './WhoSigned'

export default function App() {





  return (
    <div className="App">
  
      <header className="App-header">
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>

      </header>

      
    </div>
  );
}





// imagine you have these 3 components being import from other .tsx files
  function Home() {
    return (
      <div>
         
        <h2>Home</h2>
      </div>
    );
  }
  
  function About() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
  










  function Dashboard() {
    return (
      <div>
         <WhoSigned/>
      </div>
    );
  }
  







  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    document.getElementById("root")
  );