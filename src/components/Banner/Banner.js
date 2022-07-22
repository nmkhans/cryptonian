import React from 'react';
import './Banner.scss';
import telegram from '../../assets/telegram.png';
import discord from '../../assets/discord.png';
import twitter from '../../assets/twitter.png';
import medium from '../../assets/medium.png';
import youtube from '../../assets/youtube.png';

const Banner = () => {
    return (
        <div className="Banner">
            <div className="inner__banner container">
                <div className="banner__content">
                    <h2><span>Lending and borrowing protocol</span> backed with NFT's and built on Cardano blockchain</h2>
                    <button>launch app</button>
                    <div className="banner__social">
                        <div className="social__text">
                            <p>Join our community:</p>
                        </div>
                        <div className="social__icon">
                            <span><img src={telegram} alt="telegram" /></span>
                            <span><img src={discord} alt="discord" /></span>
                            <span><img src={twitter} alt="twitter" /></span>
                            <span><img src={medium} alt="medium" /></span>
                            <span><img src={youtube} alt="youtube" /></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;