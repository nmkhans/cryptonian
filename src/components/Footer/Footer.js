import React from 'react';
import './Footer.scss';
import telegram from '../../assets/telegram.png';
import discord from '../../assets/discord.png';
import twitter from '../../assets/twitter.png';
import medium from '../../assets/medium.png';
import youtube from '../../assets/youtube.png';

const Footer = () => {
    const date = new Date();
    const year = date.getFullYear();

    return (
        <div className="Footer">
            <div className="inner__footer container">
                <div className="footer__content">
                    <div className="footer__icon">
                        <span><img src={twitter} alt="" /></span>
                        <span><img src={youtube} alt="" /></span>
                        <span><img src={discord} alt="" /></span>
                        <span><img src={telegram} alt="" /></span>
                        <span><img src={medium} alt="" /></span>
                    </div>
                    <div className="footer__copyright">
                        <p>&copy; {year} Moin Khan. All Right Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;