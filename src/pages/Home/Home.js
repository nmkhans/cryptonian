import React from 'react';
import './Home.scss';
import Banner from './../../components/Banner/Banner';
import UseCase from './../../components/UseCase/UseCase';
import WhyAdda from '../../components/WhyAdda/WhyAdda';
import AadaVideo from '../../components/AadaVideo/AadaVideo';
import Divider from './../../components/Divider/Divider';
import AdaMedium from './../../components/AdaMedium/AdaMedium';
import Partner from './../../components/Partner/Partner';
import Footer from './../../components/Footer/Footer';

const Home = () => {
    return (
        <div className="Home">
            <Banner />
            <UseCase />
            <WhyAdda />
            <AadaVideo />
            <Divider />
            <AdaMedium />
            <Partner />
            <Footer />
        </div>
    );
};

export default Home;