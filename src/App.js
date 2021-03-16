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
import wip from './imgs/wip.png'

AOS.init( {offset: 20})

export default function App() {
  return (
    <div>
    {window.innerWidth > 700? (
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

    </Router>) : (<div id="mobilePlaceholder">
      <img src={logo} width="30%"/>

        <div className="underConstruction">
          <div data-aos ="fade-right">
          <h2>Our mobile website is still under construction!</h2>
          <h2>In the meantime, feel free to visit us on a desktop device 🙂</h2></div>
          <img src={wip} width="100%"/>


        </div>

        <div className='links'>
        <div className="col">
                        <h4>say hello</h4>
                        <ul className="list-unstyled">
                            <li>
                                <a target="_blank" href="https://facebook.com/uoftblueprint" style={{ color: '#FFF' }} rel="noreferrer">
                                facebook
                                </a>
                                </li>
                            <li><a target="_blank" href="https://instagram.com/uoftblueprint" style={{ color: '#FFF' }} rel="noreferrer">
                                instagram
                                </a>
                                </li>
                            {/* <li><a target="_blank" href="" style={{ color: '#FFF' }}>
                                twitter
                                </a>
                                </li>  */}
                            <li><a target="_blank" href="https://linkedin.com/company/uoftblueprint" style={{ color: '#FFF' }} rel="noreferrer">
                                linkedin
                                </a>
                                </li> 
                            {/* <li><a target="_blank" href="" style={{ color: '#FFF' }}>
                                medium
                                </a>
                                </li> */}
                        </ul>
                    </div>
          </div>

    </div>)}
    </div>
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