import React from 'react';
import './WhyAdda.scss';
import img from '../../assets/whyadaa.png';

const WhyAdda = () => {
    return (
        <div className="WhyAdda">
            <div className="whyadda__req"></div>
            <div className="whyadda__req__2"></div>
            <div className="inner__whyadda container">
                <div className="whyadda__title">
                    <h2>Why Aada?</h2>
                </div>
                <div className="whyadda__content">
                    <div className="whyadda__feature">
                        <img src={img} alt="Why Adaa" />
                    </div>
                    <div className="whyadda__text">
                        <h3>NFT-Bonds</h3>
                        <p>Borrowers loan or Lenders deposit is locked into NFT-Bond and can be redeemed by anyone who provides an NFT and its condition. This creates a totally new financial instrument that can be transferred, sold or staked on DeFi.</p>
                    </div>
                    <div className="whyadda__list">
                        <ul>
                            <li><h4>NFT-Bonds</h4></li>
                            <li>Stable and sustainable returns</li>
                            <li>Non - Custodial</li>
                            <li>Transparent DAO</li>
                            <li>Utilizable token</li>
                            <li>eUTXO empowered</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyAdda;