import React, {Component} from 'react';
import {
    Card,
    CardTitle,
    CardText
} from 'reactstrap';

import '../../css/Profile.css';

import bri from '../../img/bri_colour.jpg';
import email from '../../img/email.svg';
import github from '../../img/github.svg';
import linkedin from '../../img/linkedin.svg';

class About extends Component {
    render() {
        return (
            <div className="main-content">
                <Card body>
                    <CardTitle>Profile</CardTitle>
                    <CardText>
                        <div className="image-container">
                            <img src={bri} className="profile-img" alt="bri"/>

                            <div className="contact-img">
                                <a href="mailto:briannajmansell@gmail.com">
                                    <img src={email} alt="Email envelope"/>
                                </a>
                                <a href="https://github.com/bmansell" target="blank">
                                    <img src={github} alt="Github logo"/>
                                </a>
                                <a href="https://www.linkedin.com/in/briannamansell/" target="blank">
                                    <img src={linkedin} alt="Linkedin logo"/>
                                </a>
                            </div>
                        </div>
                        <div className="text-container">
                            <p>
                                During my work terms as a co-op, I was fortunate enough to work for large reaching
                                companies like IBM and BlackBerry. Currently I work for a company called Bold Commerce,
                                which has been nicknamed the "Google of the North". I've volunteered as a mentor for three
                                Ladies Learning Code workshops so far, and will be teaching my first workshop in April.
                            </p>
                        </div>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default About;