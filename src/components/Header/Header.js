import React from 'react';
import './Header.scss';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className="Header">
            <div className="inner__header container">
                <div className="header__content">
                    <div className="header__menu">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/">Docs</Link>
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
                                <Link to="/">white paper</Link>
                            </li>
                            <li>
                                <Link to="/">light paper</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;