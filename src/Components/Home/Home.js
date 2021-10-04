import React from 'react';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Footer from '../Footer/Footer';
import "./Home.css";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="home-courseText">
                <h1>LEARN FROM THE BEST </h1>
                <h3>Get Ahead, Improve Your Skill with Arcane CodeHub Training Academy</h3>
                <br />
                <div className="experince-course">
                    <h5>Get Hands On Experience in Real World Software Development from Industry Experts Through Practical and Real World Courses.</h5>
                </div>

            </div>
            <Courses></Courses>
            <Footer></Footer>
        </div>
    );
};

export default Home;