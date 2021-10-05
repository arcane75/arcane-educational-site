import React, { useEffect, useState } from 'react';
import AllCourseShow from '../AllCourseShow/AllCourseShow';
import Footer from '../Footer/Footer';
import MenuBar from '../MenuBar/MenuBar';
import "./AllCourses.css";

const AllCourses = () => {
    const [allCourses, setAllCourses] = useState([]);

    useEffect(() => {
        fetch("./allcourses.JSON")
            .then(res => res.json())
            .then(data => setAllCourses(data));
    }, []);

    return (
        <>
            <MenuBar></MenuBar>
            <div className="offer-courses">

            </div>
            <div className="allcourses-container">
                {
                    allCourses.map(scourse =>
                        <AllCourseShow
                            key={scourse.id}
                            scourse={scourse}
                        >

                        </AllCourseShow>
                    )
                }
            </div>

            <Footer></Footer>
        </>
    );
};

export default AllCourses;