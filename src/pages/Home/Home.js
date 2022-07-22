import React from 'react';
import './Home.scss';
import Banner from './../../components/Banner/Banner';
import UseCase from './../../components/UseCase/UseCase';

const Home = () => {
    return (
        <div className="Home">
            <Banner />
            <UseCase />
        </div>
    );
};

export default Home;