import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import '../css/App.css';
import code from '../img/code.svg';

import Intro from './intro/Intro';
import Navigation from './nav/Navigation';
import Profile from './profile/Profile';
import Projects from './projects/Projects';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Navigation/>
                <header className='app-header'>
                    <img src={code} alt='Spinning code logo'/>
                    <h1>
                        Brianna<span>Mansell</span>
                    </h1>
                </header>

                <br/>

                <Switch>
                    <Route exact path='/' component={Intro}/>
                    <Route path='/profile' component={Profile}/>
                    <Route path='/projects' component={Projects}/>
                </Switch>

                <footer className='app-footer'>
                    <p>&copy; Brianna Mansell. All rights reserved.</p>
                </footer>
            </div>
        );
    }
}

export default App;
