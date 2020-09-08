import React from 'react';
import ProjectGallery from './ProjectGallery';
import { images } from '../../images';

const size = 1;
const softengPhotos = [
    { src: images.soft_eng.partEz1, width: size, height: size, caption: 'Registration' },
    { src: images.soft_eng.partEz2, width: size, height: size, caption: 'Home Page' },
    { src: images.soft_eng.partEz3, width: size, height: size, caption: 'Event View' },
    { src: images.soft_eng.partEz4, width: size, height: size, caption: 'Event Creation' }
];

const SoftEngGallery = () => (
    <ProjectGallery photos={softengPhotos} margin={10} columns={4}/>
);

export default SoftEngGallery;