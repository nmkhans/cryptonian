import React from 'react';
import './AadaVideo.scss';
import featureImg from '../../assets/adaa_video.png';
import boxImg from '../../assets/adaa__video__mini.png';
import arrow from '../../assets/arrow.png';
import VideoBox from './../VideBox/VideoBox';

const AadaVideo = () => {
    return (
        <div className="AdaVideo">
            <div className="video__circle"></div>
            <div className="video__req"></div>
            <div className="video__req__2"></div>
            <div className="inner__adavideo container">
                <div className="adavideo__title">
                    <h2>Latest Aada videos</h2>
                </div>
                <div className="adavideo__content">
                    <div className="video__feature">
                        <img src={featureImg} alt="" />
                    </div>
                    <div className="video__list">
                        <div className="video__list__title">
                            <h5>View All Videos <span><img src={arrow} alt="" /></span></h5>
                        </div>
                        <div className="video__boxes">
                            <VideoBox src={boxImg}
                                title="Aada Finance V.1 Providing the Loan"
                            />
                            <VideoBox src={boxImg}
                                title="Lending and Borrowing on Cardano: Intro"
                            />
                            <VideoBox src={boxImg}
                                title="Lending and Borrowing on Cardano: Intro"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AadaVideo;