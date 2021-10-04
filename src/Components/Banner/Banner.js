import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner-container">
            <div className="banner">
                <MenuBar></MenuBar>
            </div>
        </div>
    );
};

export default Banner;