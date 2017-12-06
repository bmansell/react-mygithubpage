import React, { Component } from 'react';
import code from './img/code.svg';
import linkedin from './img/linkedin.svg';
import github from './img/github.svg';
import email from './img/email.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="App-header">
          <header>
            <img src={code} className="App-logo" alt="logo" />
            <h1 className="App-title">Brianna Mansell</h1>
          </header>
        </div>

        <div className="App-intro">
          <p>
            Hello, world!
            <br/>
            <br/>
            I'm a recent alumni from the University of Manitoba's Computer Science Co-operative program. As a computer scientist, I love learning about the interactions between humans and computers. The user experience is a concept I value greatly, and my background in psychology helps me to be a more conscious developer of this experience.
            <br/>
            <br/>
            I recently attended my first Ladies Learning Code event as a volunteer mentor. It was such a rewarding experience getting to assist new learners, and I plan to increase my contributions towards the community and advocating for women in technology.
          </p>
        </div>

        <div className="App-footer">
          <hr/>
          <a href="mailto:briannajmansell@gmail.com">
            <img src={email} className="App-footer-icon" alt="email" />
          </a>
          <a href="https://github.com/bmansell" target="blank">
            <img src={github} className="App-footer-icon" alt="github" />
          </a>
          <a href="https://www.linkedin.com/in/briannamansell/" target="blank">
            <img src={linkedin} className="App-footer-icon" alt="linkedin" />
          </a>
          <br/>
          <span className="App-footer-text">© Brianna Mansell. All rights reserved.</span>
        </div>

      </div>


    );
  }
}

export default App;
