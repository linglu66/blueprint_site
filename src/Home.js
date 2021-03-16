import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Route, Switch, NavLink,Link, Redirect, BrowserRouter ,useParams} from 'react-router-dom'
import shelterMovers from './imgs/shelterMovers.png'
import meritAward from './imgs/meritAward.png'
import oneCity from './imgs/oneCity.png'
import hero from './imgs/hero.png'
import team from './imgs/Team2020.png'
import mission from './imgs/mission.png'
import innovation from './imgs/innovation.png'
import community from './imgs/community.png'

import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'


const Home = () => {
    // var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    return(
   
    <div>
     { window.innerWidth > 700 ? (
         <div>
    <div id='hero'>
        <img src={hero} alt="Snow" width="100%"/>

    
        <div data-aos="fade-right" id='intro'>
            <h1 id='introHead'>Tech for Social Good</h1>
            <p id='introBody'>We are a team of students at the University of Toronto that provide software solutions for non-profits.</p>
        </div>
        <div className="third" id="mission">
            <h1 >Our Mission</h1>
            <p id='introBody'>Blueprint strives to make technology accessible and useful for those who assist communities and promote public welfare.</p>
        </div>
    </div>
    <div class='bg-grey'>
        <div class="margin">
            <div class="block">
            <div class="textContent"  data-aos="fade-right" 
             data-aos-offset="10">
                <h2>Our Projects</h2>
                <p>Projects that we’ve collaborated on with some amazing organizations.</p>
                
            </div>
            <div class="cards">
              
                <a href="https://meritaward.ca/"  target ="_blank"class='card-home'>
                    <img src={meritAward} width='100%'/>

                    <div class="cardText">

                        <h3>Merit Award</h3>
                        <p>The Merit Award project is a scholarship platform that handles applications and reviews processes  for awarding scholarships to high school students.
                            <br/>
                            <br/>
                            The goal of the platform is to serve as a way for Merit Award to manage their scholarship program efficiently.</p>
                    </div>
                
                </a>
                <a href="https://www.onecityfund.com/" target ="_blank" class='card-home'>
                    <img src={oneCity} width='100%'/>
                    <div class="cardText">
                    
                    <h3>OneCity</h3>
                    <p>The ONE City Scholarship Fund was created by educators to support the talents and resilience of Toronto’s young people. 
                    <br/>
                            <br/>

                        We award scholarships to students who have excelled academically despite facing substantial personal and financial obstacles.</p>
                    </div>
                
                </a>
                <div href="" class='card-home'>
                    <img src={shelterMovers} width='100%'/>

                    <div class="cardText">
                        <h3>Helping Women and Children</h3>
                        <p>We're also working with a national, volunteer-powered nonprofit organization that supports women and children suffering abuse. 
                            <br/>
                            <br/>
                           This project is under NDA to ensure safety of their clients.</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
    <div class="margin">
            <div class="block">
            <div class="textContent"  data-aos="fade-right" >
                <h2>Our Team</h2>
                <p>Each year, teams of five students work with non-profit organizations 
                    on projects to help them better serve their communities. </p>
                
            </div>
            <div id='groupPic'>
                <img src={team} width='100%'/>
            
            </div>
        </div>
    </div>

    <div class='bg-grey'>
        <div class="margin">
            <div class="block">
            <div class="textContent"  data-aos="fade-right" >
                <h2>Our Values</h2>
            
            </div>
            <div class="cards values">
                <div class='card-home'>
                    <img src={mission} class ='valueIcon'/>
                    <div class="cardText">
                        <h3>Mission First</h3>
                            <p>We will always prioritize the mission first. Our main priority is doing work for social good.</p>
                    </div>
                </div>
                <div class='card-home'>
                    <img src={innovation} class='valueIcon'/>
                    <div class="cardText">

                        <h3>Innovation</h3>
                        <p>We will continue to push the boundaries to provide the best possible solutions. </p>
                    </div>
                
                </div>
                <div class='card-home'>
                    <img src={community} class='valueIcon'/>
                    <div class="cardText">
                    
                    <h3>Community</h3>
                    <p>We will continue to educate ourselves to provide the best possible solutions.</p>
                    </div>
                
                </div>
            </div>
            </div>
        </div>

        <div class='apply'></div>
        <div class="bg-dark">
            <div class="margin footer">
                <div class="footer_header"></div>
                <div class="footer_links">
                    <div class="quarter"></div>
                    <div class="quarter"></div>
                    <div class="quarter"></div>
                    <div class="quarter"></div>
                </div>

            </div>
        </div>

    </div>
    <Contact/>
    <Footer/>
    </div>
        ) : 
        (<div>sorry temp</div>)}

    </div>

    )
    
    }

export default Home;