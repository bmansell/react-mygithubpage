import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { images } from '../../images';

const graphicsPhotos = [
    { src: images.graphics.shapes, width: 0.2, height: 0.2, caption: 'Model Manipulation (Duplicate, Transform, Rotate)' },
    { src: images.graphics.bubbles, width: 0.2, height: 0.2, caption: 'Bubble Wand with Wind Physics' },
    { src: images.graphics.robot1, width: 0.2, height: 0.2, caption: 'Walking Cycle with Different Camera Views' },
    { src: images.graphics.robot2, width: 0.2, height: 0.2, caption: 'Endless Runner' }
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
                    isOpen={this.state.lightboxReactIsOpen}
                />
            </div>
        );
    }

    openLightbox(event, obj) {
        this.setState({
            currentGraphImage: obj.index,
            lightboxReactIsOpen: true,
        });
    }

    closeLightbox() {
        this.setState({
            currentGraphImage: 0,
            lightboxReactIsOpen: false,
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