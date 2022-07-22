import React from 'react';
import './UseCase.scss';
import play from '../../assets/play.png';
import useCase from '../../assets/usecase.png';

const UseCase = () => {
    return (
        <div className="UseCase">
            <div className="usereq"></div>
            <div className="usecircle"></div>
            <div className="inner__usecase container">
                <div className="usecase__content">
                    <div className="usecase__text">
                        <div className="usecase__title">
                            <h2>Use cases for CNFT</h2>
                        </div>
                        <div className="usecase__shorting">
                            <ul>
                                <li>
                                    <button>Shorting</button>
                                </li>
                                <li>
                                    <button>Leverage</button>
                                </li>
                                <li>
                                    <button>Farming</button>
                                </li>
                                <li>
                                    <button>Safe buy</button>
                                </li>
                                <li>
                                    <button>Transferable Loan</button>
                                </li>
                            </ul>
                        </div>
                        <div className="usecase__description">
                            <p>Shorting is the act of selling the cryptocurrency in the hope that it falls in value and you can buy it back at a lower price.</p>
                        </div>
                        <div className="usecase__action">
                            <button>
                                <img src={play} alt="Launch application" />
                            </button>
                            <p>Launch Application</p>
                        </div>
                    </div>
                    <div className="usecase__feature">
                        <img src={useCase} alt="Usecase Feature Img" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UseCase;