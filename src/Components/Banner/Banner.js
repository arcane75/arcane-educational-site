import React from 'react';
import MenuBar from '../MenuBar/MenuBar';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner-container ">
            <div className="">
                <div className="row d-flex banner align-items-center justify-content-center">
                    <MenuBar></MenuBar>
                    <div className="col-md-6">
                        <button className="mt-3 about-btn">About Us</button>
                    </div>
                    <div className="col-md-6"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;