import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Instructor from '../Instructor/Instructor';
import MenuBar from '../MenuBar/MenuBar';
import "./Instructors.css";

const Instructors= () => {
    const [instructors, setInstructors] = useState([]);

    useEffect(() => {
        fetch("./instructors.JSON")
            .then(res => res.json())
            .then(data => setInstructors(data));
    }, []);

return (
        <div>
            <MenuBar></MenuBar>

            <div className="instructors-banner">

            </div>

            <div className="instructors-container">
                {
                    instructors.map( instructor => <Instructor
                    key = {instructor.id}
                    instructor={instructor}
                    >

                    </Instructor>)
                }
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Instructors;