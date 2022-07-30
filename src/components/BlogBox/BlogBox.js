import React from 'react';
import './BlogBox.scss';

const BlogBox = ({ img, title, date }) => {
    return (
        <div className="BlogBox">
            <div className="blog__feature">
                <img src={img} alt="" />
            </div>
            <div className="blog__title">
                <h2><span>{date}</span> {title}</h2>
            </div>
        </div>
    );
};

export default BlogBox;