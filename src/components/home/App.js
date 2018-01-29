import React, {Component} from 'react';

import '../../css/App.css';
import code from '../../img/code.svg';

import Intro from './Intro';
import Profile from '../profile/Profile';
import Projects from '../projects/Projects';
import Navigation from './Navigation';

class App extends Component {
    render() {
        return (
            <div className='app'>
                <Navigation/>
                <header>
                    <img src={code} alt='Spinning code logo'/>
                    <h1>Brianna<span>Mansell</span></h1>
                </header>

                {App.renderBody()}
                <footer>
                    <p>&copy; Brianna Mansell. All rights reserved.</p>
                </footer>
            </div>
        );
    }

    static renderBody() {
        const page = document.location.pathname;

        switch (page) {
            case '/profile':
                return <Profile/>;
            case '/projects':
                return <Projects/>;
            default:
                return <Intro/>;
        }
    }
}

export default App;
