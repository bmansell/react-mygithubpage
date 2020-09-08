import React, { useState } from 'react';
import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

const ProjectGallery = ({ photos, margin, columns }) => {
    const [ isOpen, toggleLightbox ] = useState(false);
    const [ imageIndex, setImageIndex ] = useState(0);

    return (
        <div>
            <Gallery
                photos={photos}
                onClick={(event, photo) => {
                    setImageIndex(photo.index);
                    toggleLightbox(true);
                }}
                margin={margin}
                columns={columns}
            />
            <Lightbox
                images={photos}
                backdropClosesModal={true}
                onClose={() => toggleLightbox(false)}
                onClickPrev={() => setImageIndex(imageIndex - 1)}
                onClickNext={() => setImageIndex(imageIndex + 1)}
                currentImage={imageIndex}
                isOpen={isOpen}
            />
        </div>
    );
};

export default ProjectGallery;