import React from 'react';
import './Partner.scss';
import Marquee from "react-fast-marquee";
import partnerOne from '../../assets/partner_1.png';
import partnerTwo from '../../assets/partner_2.png';
import partnerThree from '../../assets/partner_3.png';
import partnerFour from '../../assets/partner_4.png';
import partnerFive from '../../assets/partner_5.png';
import partnerSix from '../../assets/partner_6.png';
import partnerSeven from '../../assets/partner_7.png';
import partnerEight from '../../assets/partner_8.png';
import partnerNine from '../../assets/partner_9.png';
import partnerTen from '../../assets/partner_10.png';

const Partner = () => {
    return (
        <div className="Partner">
            <div className="partner__circle"></div>
            <div className="partner__req"></div>
            <div className="inner__partner container">
                <div className="partner__title">
                    <h2>Our partners</h2>
                </div>
                <div className="partner__content">
                    <div className="part__top__marquee">
                        <Marquee gradient={false} speed={60} direction="left">
                            <div className="partners">
                                <img src={partnerOne} alt="" />
                            </div>
                            <div className="partners">
                                <img src={partnerTwo} alt="" />
                            </div>
                            <div className="partners">
                                <img src={partnerThree} alt="" />
                            </div>
                            <div className="partners">
                                <img src={partnerFour} alt="" />
                            </div>
                            <div className="partners">
                                <img src={partnerFive} alt="" />
                            </div>
                        </Marquee>
                    </div>
                    <div className="part__bottom__marquee">
                        <Marquee gradient={false} speed={60} direction="right">
                            <div className="partners">
                                <img src={partnerSix} alt="" />
                            </div>
                            <div className="partners">
                                <img src={partnerSeven} alt="" />
                            </div>
                            <div className="partners">
                                <img src={partnerEight} alt="" />
                            </div>
                            <div className="partners">
                                <img src={partnerNine} alt="" />
                            </div>
                            <div className="partners">
                                <img src={partnerTen} alt="" />
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partner;