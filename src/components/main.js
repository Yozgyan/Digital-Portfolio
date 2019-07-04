import React from 'react';
import LandingPage from './landingpage';
import {Switch, Route} from 'react-router-dom';
import About from './aboutme';
import Experience from './resume';
import Projects from './projects';
import Contact from './contact';


const Main = () =>(
    <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route  path='/Landing' component={LandingPage} />
        <Route  path='/aboutme' component={About} />
        <Route  path='/resume' component={Experience} />
        <Route  path='/projects' component={Projects} />
        <Route  path='/contact' component={Contact} />
    </Switch>
)


export default Main;