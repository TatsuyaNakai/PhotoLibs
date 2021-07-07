import React,{useContext} from 'react';
import {photoContext} from './PhotoListPage';

import PhotoDetail from './PhotoDetail';


const PhotoPanel = () => {
    const photo=useContext(photoContext);
    // console.log({photo});

    return (
        <div className='panel'>
            <style jsx>{`
            .panel{
                background: orange;
                padding-bottom:10px;
                width:80%;
                margin:0 auto;
            }`}
            </style>
            <h3>{photo.title}</h3>
            <PhotoDetail />
        </div>
    );
}

export default PhotoPanel;