import React from 'react';
import './AdaMedium.scss';
import arrow from '../../assets/arrow.png';
import BlogBox from '../BlogBox/BlogBox';
import blogImg from '../../assets/blog_1.png';

const AdaMedium = () => {
    return (
        <div className="AdaMedium">
            <div className="blog__circle"></div>
            <div className="blog__req"></div>
            <div className="inner__adamedium container">
                <div className="adamedium__title">
                    <h2>Aada Medium</h2>
                    <h5>View all insights <span><img src={arrow} alt="" /></span></h5>
                </div>
                <div className="adamedium__content">
                    <BlogBox
                        img={blogImg}
                        title="Why is Crypto Lending Worth It ?"
                        date="mar 24"
                    />
                    <BlogBox
                        img={blogImg}
                        title="Charli3 to Provide Aada Finance with Oracle Services on Cardano"
                        date="mar 24"
                    />
                    <BlogBox
                        img={blogImg}
                        title="Aada Finance to Integrate the Djed Stablecoin, issued by COTI"
                        date="mar 24"
                    />
                </div>
            </div>
        </div>
    );
};

export default AdaMedium;