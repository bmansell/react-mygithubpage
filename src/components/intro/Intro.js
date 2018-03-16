import React, {Component} from 'react';
import {
    Card,
    CardTitle,
    CardText
} from 'reactstrap';

class Intro extends Component {
    render() {
        return (
            <div className='main-content'>
                <Card body>
                    <CardTitle>Hello, world!</CardTitle>
                    <CardText>
                        <br/>
                        I'm a recent alumni from the University of Manitoba's Computer Science Co-operative program. As a computer scientist, the user experience is a concept I value greatly and my background in psychology helps me to be a more conscious developer of this experience.
                        <br/>
                        <br/>
                        In September of 2017, I attended my first <a href='https://www.canadalearningcode.ca/' target='blank' rel='noopener noreferrer'>Canada Learning Code</a> event as a volunteer mentor. It was such a rewarding experience getting to assist learners with different levels of experience and having the opportunity to introduce women of all backgrounds to my passion. Since that time I have been volunteering at other Canada Learning Code events such as the "Intro to Python" and "Building a Webpage with HTML & CSS" workshops.
                        <br/>
                        <br/>
                        Recently I was asked to join the <a href='http://cs.umanitoba.ca/~wics/' target='blank' rel='noopener noreferrer'>Women of Computer Science (WICS)</a> community from the University of Manitoba, and I will be helping teach requested topics and provide support for its current members as an industry mentor. I also will be leading a Ladies Learning Code "Intro to JavaScript" workshop on April 21st!
                        <br/>
                        <br/>
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default Intro;