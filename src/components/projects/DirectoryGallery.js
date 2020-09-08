import React from 'react';
import ProjectGallery from './ProjectGallery';
import { images } from '../../images';

const width = 0.2;
const height = 0.3;
const directoryPhotos = [
    { src: images.directory.directory1, width: width, height: height },
    { src: images.directory.directory2, width: width, height: height },
    { src: images.directory.directory3, width: width, height: height }
];

const DirectoryGallery = () => (
    <ProjectGallery photos={directoryPhotos} margin={20} columns={3}/>
);

export default DirectoryGallery;