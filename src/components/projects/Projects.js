import React, {Component} from 'react';
import {
    Badge,
    Card,
    CardBody,
    CardTitle,
    CardText,
} from 'reactstrap';

import '../../css/Projects.css';

import DirectoryGallery from './DirectoryGallery';
import GraphicsGallery from './GraphicsGallery';
import ReactGallery from './ReactGallery';
import SoftEngGallery from './SoftEngGallery';

class Projects extends Component {
    render() {
        return (
            <div className='main-content'>
                <Card>
                    <CardBody>
                        <CardTitle>
                            <Badge>Intro to React</Badge>
                        </CardTitle>
                        <ReactGallery/>
                        <CardText>
                            In March of 2018, I presented a beginner lesson about the JavaScript library React alongside my co-worker Jessica Sanders. Together we gave a lecture on the basics of React and demonstrated some simple component exercises. I developed these examples using the create-react-app starter by Facebook, and you can find the <a href='https://github.com/bmansell/intro-to-react' target='_blank' rel='noopener noreferrer'>repository code</a> on my GitHub account. The <a href='https://docs.google.com/presentation/d/1wY8THWbEHNVILIhR_ydCebQFwxxD1TAtT6KKD_Gzo3U/edit?usp=sharing' target='_blank' rel='noopener noreferrer'>lesson content</a> is hosted on Google Slides.
                        </CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle>
                            <Badge>Directory</Badge>
                        </CardTitle>
                        <DirectoryGallery/>
                        <CardText>
                            Directory is a project that I helped design and develop during the "Innovate or Die" (IOD) days at Bold, which is a hackathon type event with the goal of improving Bold itself. You get to create your own project or help someone else achieve theirs. I chose to help a fellow co-worker and good friend in creating a web application that uses Samsung SmartThings sensors. The sensors are used to track office movement and the current door positions of our directors' offices to see if they are available or away. The code base uses JavaScript (React), Golang, Groovy, and Ruby (Sinatra). At our most recent IOD we were able to Docker-ize our web app and publish it live.
                        </CardText>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <CardTitle>
                            <Badge>Computer Graphics</Badge>
                        </CardTitle>
                        <GraphicsGallery/>
                        <CardText>
                            I loved that this class provided a creative outlet for myself to explore. I really enjoyed the animation unit, and the visual feedback of getting movement just right was very rewarding. In particular I am very proud of my "Endless Runner" robot simulation that involved static and dynamic obstacles, a skybox, textures, and a particle effect of our own choosing. Also included are GIFs of my assignments for model manipulation program, a realistic bubble blowing simulation, and the previous version of the animated robot involving two different projections and views. These were made using OpenGL 2.1 and Java 8.
                        </CardText>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <CardTitle>
                            <Badge>Software Engineering II</Badge>
                        </CardTitle>
                        <SoftEngGallery/>
                        <CardText>
                            The <a href='https://ec2-54-84-176-22.compute-1.amazonaws.com/' target='blank' rel='noopener noreferrer'>partEz</a> application is what my group created for our Software Engineering II class using a Laravel, MySQL, and PHP stack. This was my first time developing using this stack. The app exists on both web and android platforms, and the purpose of the app is to facilitate the planning, organizing, and sharing of parties. In addition to contributing to this code base via implementation of the Invitations page, Event View, and testing, I also designed and created the logo. The codebase is linked here on my <a href='https://github.com/umSoftEng2GrpE/partEZ' target='_blank' rel='noopener noreferrer'> GitHub</a>.
                        </CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

export default Projects;