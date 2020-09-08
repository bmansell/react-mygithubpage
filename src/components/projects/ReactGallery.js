import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';
import { images } from '../../images';

const reactPhotos = [
    { src: images.react.counter, width: 0.1, height: 0.1, caption: 'Counter' },
    { src: images.react.water, width: 0.1, height: 0.1, caption: 'States of Water' },
    { src: images.react.beer, width: 0.1, height: 0.1, caption: 'States of People' },
];

class ReactGallery extends Component {
    constructor() {
        super();
        this.state = {
            currentReactImage: 0
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
                    photos={reactPhotos}
                    onClick={this.openLightbox}
                    margin={10}
                    columns={3}
                />
                <Lightbox
                    images={reactPhotos}
                    backdropClosesModal={true}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentReactImage}
                    isOpen={this.state.lightboxReactIsOpen}
                />
            </div>
        );
    }

    openLightbox(event, obj) {
        this.setState({
            currentReactImage: obj.index,
            lightboxReactIsOpen: true,
        });
    }

    closeLightbox() {
        this.setState({
            currentReactImage: 0,
            lightboxReactIsOpen: false,
        });
    }

    gotoPrevious() {
        this.setState({
            currentReactImage: this.state.currentReactImage - 1,
        });
    }

    gotoNext() {
        this.setState({
            currentReactImage: this.state.currentReactImage + 1,
        });
    }
}

export default ReactGallery;