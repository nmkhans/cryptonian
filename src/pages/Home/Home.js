import React from 'react';
import './Home.scss';
import Banner from './../../components/Banner/Banner';
import UseCase from './../../components/UseCase/UseCase';
import WhyAdda from '../../components/WhyAdda/WhyAdda';
import AadaVideo from '../../components/AadaVideo/AadaVideo';
import Divider from './../../components/Divider/Divider';

const Home = () => {
    return (
        <div className="Home">
            <Banner />
            <UseCase />
            <WhyAdda />
            <AadaVideo />
            <Divider />
        </div>
    );
};

export default Home;