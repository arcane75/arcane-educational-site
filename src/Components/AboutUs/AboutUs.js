import React from 'react';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <div className="about-img">

            </div>
            <div className="row about-text">
                <div className="col-md-12">
                    <br />
                    <h2>Working for the IT Industry </h2>
                    <h5>Arcane CodeHub has always been passionatly working for the betterment of IT industry. We want to grow skilled IT professionals who will rock the world with their extraordinary professionalism. As part of our mission, we arrange programming contest, software engineering events and seminars. We believe in hard core industry specialization to grow the top 10% IT professionals in the country and around the globe.</h5>
                    <br />
                    <h2>Why Chose  Arcane CodeHub:</h2>
                    <h4>Real World Project Development</h4>
                    <h5>Learn using real world projects with customer requirements and specifications. Enrich your experience of working with real people with real projects. Start building project from scratch and finish it with publishing and deploying it in server.</h5>
                    <br />
                    <h4>Follow Latest Industry Standard Tools and Techniques</h4>
                    <h5>Always up to date; our courses take into consideration newer frameworks, technology, work process and development criterias used in top companies. Be on the edge.</h5>
                    <br />
                    <h4>Build Solid Foundations</h4>
                    <h5>Successful Careers depend on a solid mastery of the fundamentals. Build a solid foundations on the essential programming skills and knowledge.</h5>
                    <br />
                    <h4>Learn Teamwork and Collaboration</h4>
                    <h5>Get to know how to work in a project with your colleagues. Collaborate with other people in the process and learn team work.</h5>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AboutUs;