import React, {Component} from 'react';
import {
    Card,
    CardBody,
    CardText
} from 'reactstrap';

import '../../css/Profile.css';

import bri from '../../img/bri_colour.jpg';
import email from '../../img/email.svg';
import github from '../../img/github.svg';
import linkedin from '../../img/linkedin.svg';

class Profile extends Component {
    render() {
        return (
            <div className='main-content'>
                <Card>
                    <CardBody>
                        <CardText>
                            <div className='image-container'>
                                <img src={bri} className='profile-img' alt='bri'/>

                                <div className='contact'>
                                    <a href='mailto:briannajmansell@gmail.com'>
                                        <img src={email} alt='Email envelope'/>
                                    </a>
                                    <a href='https://github.com/bmansell' target='blank' rel='noopener noreferrer'>
                                        <img src={github} alt='Github logo'/>
                                    </a>
                                    <a href='https://www.linkedin.com/in/briannamansell/' target='blank' rel='noopener noreferrer'>
                                        <img src={linkedin} alt='Linkedin logo'/>
                                    </a>
                                </div>
                            </div>
                            <div className='text-container'>
                                <p>
                                    When I first dabbled in code, I was middle school aged and had never taken any sort of Computer Science course before. There used to be an online website builder called <a href='https://en.wikipedia.org/wiki/Piczo' target='_blank' rel='noopener noreferrer'>Piczo</a> which a couple of my friends had found and made their own personalized pages. It had really easy to use components that allowed you to paste in plain HTML and see instant feedback. It was so rewarding for myself to find and retrieve code snippets to decorate my website, and ever since then I've been hooked on the creativity involved in expressing myself in my code. Everyone who programs has their own personality put into what they write, and that's always something I have found is special with this profession.
                                    <br/>
                                    <br/>
                                    I've come a long way from basic HTML and glitter graphics. During my university work terms as a co-op, I was fortunate enough to work for large reaching companies like IBM and BlackBerry. On my third work term I got a chance to work for a company called Bold Commerce, which has been nicknamed the 'Google of the North'. As you might have guessed already, I had such a great time there that I returned after graduating!
                                </p>
                            </div>
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Profile;
