import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import robot1 from '../../img/robotA3.gif';
import robot2 from '../../img/robotA4.gif';
import shapes from '../../img/shapesA2.gif';
import bubbles from '../../img/bubblesA3.gif';

const graphicsPhotos = [
    {src: shapes, width: 0.2, height: 0.2, caption: 'Model Manipulation (Duplicate, Transform, Rotate)'},
    {src: bubbles, width: 0.2, height: 0.2, caption: 'Bubble Wand with Wind Physics'},
    {src: robot1, width: 0.2, height: 0.2, caption: 'Walking Cycle with Different Camera Views'},
    {src: robot2, width: 0.2, height: 0.2, caption: 'Endless Runner'}
];

class GraphicsGallery extends Component {
    constructor() {
        super();
        this.state = {
            currentGraphImage: 0
        };
        this.closeLightbox = this.closeLightbox.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
    }

    render() {
        return (
            <div>
                <Gallery
                    photos={graphicsPhotos}
                    onClick={this.openLightbox}
                    margin={50}
                    columns={4}
                />
                <Lightbox
                    images={graphicsPhotos}
                    backdropClosesModal={true}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentGraphImage}
                    isOpen={this.state.lightboxGraphIsOpen}
                />
                <p>
                    I loved that this class provided a creative outlet for myself to explore. I really enjoyed the
                    animation unit, and the visual feedback of getting movement just right was very rewarding. In
                    particular I am very proud of my "Endless Runner" robot simulation that involved static and dynamic
                    obstacles, a skybox, textures, and a particle effect of our own choosing. Also included are GIFs of
                    my assignments for model manipulation program, a realistic bubble blowing simulation, and the
                    previous version of the animated robot involving two different projections and views. These were
                    made using OpenGL 2.1 and Java 8.
                </p>
            </div>
        );
    }

    openLightbox(event, obj) {
        this.setState({
            currentGraphImage: obj.index,
            lightboxGraphIsOpen: true,
        });
    }

    closeLightbox() {
        this.setState({
            currentGraphImage: 0,
            lightboxGraphIsOpen: false,
        });
    }

    gotoPrevious() {
        this.setState({
            currentGraphImage: this.state.currentGraphImage - 1,
        });
    }

    gotoNext() {
        this.setState({
            currentGraphImage: this.state.currentGraphImage + 1,
        });
    }
}

export default GraphicsGallery;