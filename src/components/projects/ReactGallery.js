import React from 'react';
import ProjectGallery from './ProjectGallery';
import { images } from '../../images';

const size = 0.1;
const reactPhotos = [
    { src: images.react.counter, width: size, height: size, caption: 'Counter' },
    { src: images.react.water, width: size, height: size, caption: 'States of Water' },
    { src: images.react.beer, width: size, height: size, caption: 'States of People' },
];

const ReactGallery = () => (
    <ProjectGallery photos={reactPhotos} margin={10} columns={3}/>
);

export default ReactGallery;