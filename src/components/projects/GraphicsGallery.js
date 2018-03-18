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
                    margin={10}
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