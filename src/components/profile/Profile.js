import React from 'react';
import {
    Card,
    CardBody,
    CardText
} from 'reactstrap';

import '../../css/Profile.css';

import bri from '../../img/briColourCircle.png';
import email from '../../img/email.svg';
import github from '../../img/github.svg';
import linkedin from '../../img/linkedin.svg';

const Profile = () => (
    <div className='main-content'>
        <Card>
            <CardBody>
                <CardText>
                    <div className='image-container'>
                        <img src={bri} className='profile-img' alt='bri'/>
                    </div>
                    <div className='text-container'>
                        <p>
                          When I first dabbled in code I was in middle school and had never taken any sort of Computer Science course. There used to exist an online website builder called <a href='https://en.wikipedia.org/wiki/Piczo' target='_blank' rel='noopener noreferrer'>Piczo</a>, which a couple of my friends had registered on and started to make their own personalized pages. This site had really straightforward configurable components that you could paste in plain HTML and see instant feedback. It was such a fun experience to find and retrieve code snippets to decorate my website, and ever since then I've been hooked on the creativity involved in expressing myself through code. It is my belief that everyone who creates code has their own personality embedded into what they write. Through volunteering and mentoring others, I hope to help recreate these experiences for others and give back to the technology community.
                        </p>
                    </div>
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
                </CardText>
            </CardBody>
        </Card>
    </div>
);

export default Profile;