import React from 'react';
import "./Instructor.css";

const Instructor = (props) => {
    const {name,img, specialist, description} = props.instructor;
    return (
        <div className="instructor-container">
            <div>
                <img src={img} alt="" />
            </div>
            <br />
            <div>
                <h4>{name}</h4>
                <p>{description}</p>
                <br />
                <h5>Specialist: {specialist}</h5>
            </div>
        </div>
    );
};

export default Instructor;