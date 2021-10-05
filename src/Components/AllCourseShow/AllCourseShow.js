import React from 'react';
import "./AllCourseShow.css";

const AllCourseShow = (props) => {
    const { name, img, CourseFee, description } = props.scourse;

    return (
        <>
            <div className="course-container">
                <div>
                    <img src={img} alt="" />
                </div>
                <br />
                <div>
                    <h4>Learn: {name}</h4>
                    <p>{description}</p>
                    <br />
                    <h5>Course Fee: {CourseFee}</h5>
                </div>

            </div>
        </>

    );
};

export default AllCourseShow;