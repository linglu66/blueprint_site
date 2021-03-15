import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import AOS from 'aos';


import Home from './Home.js'
import Team from './components/Team/Team.js'
import Chapters from './components/Chapters/Chapters.js'
import Apply from './components/Apply/Apply.js'
import './App.css';
import './style.css'
import logo from './imgs/logo.png'

AOS.init( {offset: 20})

export default function App() {
  return (
    <Router>

<nav class='bg-grey'>
      <div class='margin' id="navContent">
          <Link activeClassName='activeLink' to="/">
            <img src ={logo} height='30px' id="navLogo"/> 
          </Link>
          <ul id="navLinkContainer">

              <Link className='navLink' to='/team'><li>Team</li></Link>
              <Link class='navLink' to='/chapters'>
                  <li>Chapters</li>
              </Link>
              <Link class='navLink' to='/apply'>
                  <li>Apply</li>
              </Link>
          </ul>
      </div>
        <Switch>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/chapters">
            <Chapters />
          </Route>
          <Route path="/apply">
            <Apply />
          </Route>
          
          
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </nav>

    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }