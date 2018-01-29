import React, {Component} from 'react';
import {
    Card,
    CardText
} from 'reactstrap';

class Intro extends Component {
    render() {
        return (
            <div className='main-content'>
                <Card body>
                    <CardText>
                        Hello, world!
                        <br/>
                        <br/>
                        I'm a recent alumni from the University of Manitoba's Computer Science Co-operative program. As a
                        computer scientist, I love learning about the interactions between humans and computers. The user
                        experience is a concept I value greatly, and my background in psychology helps me to be a more
                        conscious developer of this experience.
                        <br/>
                        <br/>
                        In September of 2017, attended my first <a href='https://www.canadalearningcode.ca/' target='blank'>Canada
                        Learning Code</a> event as a volunteer mentor. It was such a rewarding experience getting to assist
                        learners with different levels of experience, and I plan to increase my contributions towards the
                        community and advocating for women in technology. Stay tuned for the workshop I'll be teaching on
                        JavaScript fundamentals in April 2018!
                    </CardText>
                </Card>
            </div>
        );
    }
}

export default Intro;