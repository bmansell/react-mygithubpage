import React, {Component} from 'react';
import {
    Card,
    CardTitle,
    CardText,
} from 'reactstrap';

import GraphicsGallery from './GraphicsGallery';
import SoftEngGallery from './SoftEngGallery';
import DirectoryGallery from './DirectoryGallery';

class Projects extends Component {
    render() {
        return (
            <div className='main-content'>
                <h2>Academic Projects</h2>
                <p>
                    <i>Pieces of work from my university experience</i>
                </p>
                <Card body>
                    <CardTitle>Computer Graphics</CardTitle>
                    <GraphicsGallery/>
                    <CardText>
                        I loved that this class provided a creative outlet for myself to explore. I really enjoyed the animation unit, and the visual feedback of getting movement just right was very rewarding. In particular I am very proud of my "Endless Runner" robot simulation that involved static and dynamic obstacles, a skybox, textures, and a particle effect of our own choosing. Also included are GIFs of my assignments for model manipulation program, a realistic bubble blowing simulation, and the previous version of the animated robot involving two different projections and views. These were made using OpenGL 2.1 and Java 8.
                    </CardText>
                </Card>
                <Card body>
                    <CardTitle>Software Engineering II</CardTitle>
                    <SoftEngGallery/>
                    <CardText>
                        The <a href='http://ec2-54-84-176-22.compute-1.amazonaws.com/' target='blank' rel='noopener noreferrer'>partEz</a> application is what my group created for our Software Engineering II class using a Laravel, MySQL, and PHP stack. This was my first time developing using this stack. The app exists on both web and android platforms, and the purpose of the app is to facilitate the planning, organizing, and sharing of parties. In addition to contributing to this code base via implementation of the Invitations page, Event View, and testing, I also designed and created the logo. The codebase is linked here on my <a href='https://github.com/umSoftEng2GrpE/partEZ' target='_blank' rel='noopener noreferrer'> GitHub</a>.
                    </CardText>
                </Card>

                <h2>Professional Projects</h2>
                <p>
                    <i>Showcases of my work that are public facing</i>
                </p>
                <Card body className='text-center'>
                    <CardTitle>Directory</CardTitle>
                    <DirectoryGallery/>
                    <CardText>
                        Directory is a project that I helped design and develop during the "Innovate or Die" (IOD) days at Bold, which is a hackathon type event with the goal of improving Bold itself. You get to create your own project or help someone else achieve theirs. I chose to help a fellow co-worker and good friend in creating a web application that uses Samsung SmartThings sensors to track office movement and current door positions of our directors to see if they are available or busy/away. The code base uses ES6 (React), Golang, Groovy, and Ruby (Sinatra). At our most recent IOD we were able to Docker-ize app and publish it live. You can check it out <a href='http://directory.boldcommerce.com' target='_blank' rel='noopener noreferrer'>here!</a>
                    </CardText>
                </Card>
                <Card body>
                    <CardTitle>Bold Shopify Toolkit</CardTitle>
                    <p>
                        The Bold Shopify Toolkit is a Symfony-based Shopify API wrapper that we use in many different apps at Bold Commerce. Currently I am one of the owners on this project and have been contributing new code and improvements semi-regularly so that we can use new API implementations in our upcoming projects. You can find those contributions <a href='https://github.com/bold-commerce/bold-shopify-toolkit/pulls?utf8=%E2%9C%93&q=is%3Apr+author%3Abmansell+' target='_blank' rel='noopener noreferrer'>here</a>.
                    </p>
                </Card>
            </div>
        );
    }
}

export default Projects;