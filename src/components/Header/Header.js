import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import LinkTo from './../LinkTo/LinkTo';

const Header = () => {
    return (
        <div className="Header">
            <div className="inner__header container">
                <div className="header__content">
                    <div className="header__menu">
                        <ul>
                            <li>
                                <LinkTo to="/">Home</LinkTo>
                            </li>
                            <li>
                                <LinkTo to="/">Docs</LinkTo>
                            </li>
                        </ul>
                    </div>
                    <div className="header__logo">
                        <Link to="/">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="header__menu">
                        <ul>
                            <li>
                                <LinkTo to="/">white paper</LinkTo>
                            </li>
                            <li>
                                <LinkTo to="/">light paper</LinkTo>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;