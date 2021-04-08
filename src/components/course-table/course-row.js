import React from 'react';
import {Link} from "react-router-dom";
import { useState } from "react";

const CourseRow = (props) => {
    
    const [courseTitle, setCourseTitle] = useState(props.course.title);
    const [owner, setOwner] = useState(props.course.owner);
    const [lastModified, setlastModified] = useState(props.course.lastModified);
    const [isEditing, setEditing] = useState(false);

    return (
         <tr> 
            <td>
                {
                    !isEditing &&
                    
                        <Link to={`/courses/table/edit/${props.course._id}`}>
                            <i className="fas fa-file"></i>
                            {courseTitle}
                        </Link>
                    
                } 
                {
                    isEditing &&
                    <input
                        onChange={(event) => setCourseTitle(event.target.value)}
                        value={courseTitle}
                        className="form-control"/>
                }
            </td>
            <td className ="d-none d-md-table-cell">
                {
                    !isEditing && props.course.owner
                }
                {
                    isEditing &&
                    <input
                        onChange={(event) => setOwner(event.target.value)}
                        value={owner}
                        className="form-control"/>
                }
            </td>
            <td className ="d-none d-lg-table-cell">
            {
                !isEditing && props.course.lastModified
            }
            {
                isEditing &&
                <input
                    onChange={(event) => setlastModified(event.target.value)}
                    value={lastModified}
                    className="form-control"/>
            }
            </td>

            <td>
            
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
                            title: courseTitle,
                            lastModified : lastModified,
                            owner: owner
                        }
                        props.updateCourse(newCourse);
                        setEditing(false);
                        // setCourseTitle(newCourse.title);
                        // setOwner(newCourse.owner);
                        // setlastModified(newCourse.lastModified);
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
                        <i className="fas fa-times" style={{
                            color: 'red'
                        }}></i>
                    </button>
                }
            </td>
            <td>
            <Link to={`/courses/${props.course._id}/quizzes`}>
                <span>Quizzes</span>
            </Link>
            </td>
        </tr>
    )
}

// CourseRow.defaultProps = {
//     title : "CS5610 Web Development",
//     owner : "Haoting Qiu",
//     lastModified : "01/01/2021"
// }

export default CourseRow