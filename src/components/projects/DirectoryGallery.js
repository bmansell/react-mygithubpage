import React, {Component} from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import directory1 from '../../img/directory1.png';
import directory2 from '../../img/directory2.png';
import directory3 from '../../img/directory3.png';

const directoryPhotos = [
    {src: directory1, width: 0.2, height: 0.3},
    {src: directory2, width: 0.2, height: 0.3},
    {src: directory3, width: 0.2, height: 0.3}
];

class DirectoryGallery extends Component {
    constructor() {
        super();
        this.state = {
            currDirectoryImg: 0
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
                    photos={directoryPhotos}
                    onClick={this.openLightbox}
                    margin={50}
                    columns={3}
                />
                <Lightbox
                    images={directoryPhotos}
                    backdropClosesModal={true}
                    onClose={this.closeLightbox}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    currentImage={this.state.currDirectoryImg}
                    isOpen={this.state.lightboxDirectoryIsOpen}
                />
            </div>
        );
    }

    openLightbox(event, obj) {
        this.setState({
            currDirectoryImg: obj.index,
            lightboxDirectoryIsOpen: true,
        });
    }

    closeLightbox() {
        this.setState({
            currDirectoryImg: 0,
            lightboxDirectoryIsOpen: false,
        });
    }

    gotoPrevious() {
        this.setState({
            currDirectoryImg: this.state.currDirectoryImg - 1,
        });
    }

    gotoNext() {
        this.setState({
            currDirectoryImg: this.state.currDirectoryImg + 1,
        });
    }
}

export default DirectoryGallery;