import React from 'react';
import "./Course.css";

const Course = (props) => {
    const { name, img, CourseFee, description } = props.course;
    return (

        <div className="course-container ">
            <div>
                <img src={img} alt="" />
            </div>
            <br />
            <div>
                <h4>Learn: {name}</h4>
                <p>{description.slice(0, 150)}</p>
                <br />
                <h5>Course Fee: {CourseFee}</h5>
            </div>
        </div>

    );
};

export default Course;

