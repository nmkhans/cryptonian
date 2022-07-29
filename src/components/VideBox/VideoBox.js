import React from 'react';
import './VideoBox.scss';

const VideoBox = ({src, title}) => {
    return (
        <div className="VideoBox">
            <div className="video__box__feature">
                <img src={src} alt="" />
            </div>
            <div className="video__box__title">
                <h4>{title}</h4>
            </div>
        </div>
    );
};

export default VideoBox;