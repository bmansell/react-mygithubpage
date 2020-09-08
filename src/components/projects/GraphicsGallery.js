import React from 'react';
import ProjectGallery from './ProjectGallery';
import { images } from '../../images';

const size = 0.2;
const graphicsPhotos = [
    { src: images.graphics.shapes, width: size, height: size, caption: 'Model Manipulation (Duplicate, Transform, Rotate)' },
    { src: images.graphics.bubbles, width: size, height: size, caption: 'Bubble Wand with Wind Physics' },
    { src: images.graphics.robot1, width: size, height: size, caption: 'Walking Cycle with Different Camera Views' },
    { src: images.graphics.robot2, width: size, height: size, caption: 'Endless Runner' }
];

const GraphicsGallery = () => (
    <ProjectGallery photos={graphicsPhotos} margin={10} columns={4}/>
);

export default GraphicsGallery;