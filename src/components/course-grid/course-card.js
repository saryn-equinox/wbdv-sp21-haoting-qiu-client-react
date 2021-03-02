import React from 'react';
import {Link} from "react-router-dom";
import {useState} from "react";
import { Button } from 'bootstrap';

const CourseCard = (props) => {
    const [isEditing, setEditing] = useState(false);
    const [courseTitle, setCourseTitle] = useState(props.course.title);
    
    return ( <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-1 my-3">
        <div className="card">
            <img class="card-img-top" src="#" alt="Card image cap"></img>
            <div className="card-body">
                {
                    !isEditing &&
                    <Link to={`/courses/grid/edit/${props.course._id}`}>
                        <h4 className="card-title">{courseTitle}</h4>
                    </Link>
                }
                {
                    isEditing &&
                    <input
                        onChange={(event) => setCourseTitle(event.target.value)}
                        value={courseTitle}
                        className="form-control"/>
                }
                
                <p className="card-text">Some description</p>
                {
                    !isEditing &&
                    <Link to={`/courses/grid/edit/${props.course._id}`}>
                        <a className="btn mx-1 btn-primary">{courseTitle}</a>
                    </Link>
                }
                {
                    isEditing &&
                    <button className="btn mx-1 btn-primary" disabled>{courseTitle}
                    </button>
                }

                {
                    !isEditing &&
                    <button className="btn" onClick={() => setEditing(true)}>
                        <i className="fas fa-edit"></i>
                    </button>
                }
                {
                    isEditing &&
                    <button className="btn" onClick={() => {
                        const newCourse = {
                            ...props.course,
                            title: courseTitle
                        }
                        props.updateCourse(newCourse);
                        setEditing(false);
                    }} >
                        <i class="fas fa-check" style={{
                            color: 'green'
                        }}></i>
                    </button>
                }
                {
                    isEditing &&
                    <button className="btn" onClick={() => {
                        props.deleteCourse(props.course._id);
                        setEditing(false);
                    }}>
                        <i className="fas fa-times"  style={{
                            color: 'red'
                        }}></i>
                    </button>
                }
            </div>
        </div>
    </div>)
}

// CourseCard.defaultProps = {
//     course : {
//         title : "CS5610 Web Development",
//         owner : "Haoting Qiu",
//         lastModified : "01/01/2021"
//     }
// }



export default CourseCard
