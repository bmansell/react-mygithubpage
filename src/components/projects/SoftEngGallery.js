import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import partEz1 from '../../img/partEz1.JPG';
import partEz2 from '../../img/partEz2.JPG';
import partEz3 from '../../img/partEz3.JPG';
import partEz4 from '../../img/partEz4.JPG';

const softengPhotos = [
    {src: partEz1, width: 1, height: 1, caption: 'Registration'},
    {src: partEz2, width: 1, height: 1, caption: 'Home Page'},
    {src: partEz3, width: 1, height: 1, caption: 'Event View'},
    {src: partEz4, width: 1, height: 1, caption: 'Event Creation'}
];

class SoftEngGallery extends Component {
    constructor() {
        super();
        this.state = {
            currentSoftEngImage: 0
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
                    photos={softengPhotos}
                    onClick={this.openLightbox}
                    margin={10}
                    columns={4}
                />
                <Lightbox
                    images={softengPhotos}
                    backdropClosesModal={true}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currentSoftEngImage}
                    isOpen={this.state.lightboxSoftEngIsOpen}
                />
            </div>
        );
    }

    openLightbox(event, obj) {
        this.setState({
            currentSoftEngImage: obj.index,
            lightboxSoftEngIsOpen: true,
        });
    }

    closeLightbox() {
        this.setState({
            currentSoftEngImage: 0,
            lightboxSoftEngIsOpen: false,
        });
    }

    gotoPrevious() {
        this.setState({
            currentSoftEngImage: this.state.currentSoftEngImage - 1,
        });
    }

    gotoNext() {
        this.setState({
            currentSoftEngImage: this.state.currentSoftEngImage + 1,
        });
    }
}

export default SoftEngGallery;