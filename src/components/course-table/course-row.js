import React from 'react';
import {Link} from "react-router-dom";
import { useState } from "react";

const CourseRow = (props) => {

    const [editing, setEditing] = useState(false);
    console.log(editing); // 一直是true
    const [courseTitle, setCourseTitle] = useState(props.course.title);
    const [owner, setOwner] = useState(props.course.owner);
    const [lastModified, setlastModified] = useState(props.course.lastModified);
    
    return (
         <tr> 
            <td>
                {
                    !editing &&
                    
                        <Link to="/courses/editor">
                            <i className="fas fa-file"></i>
                            {courseTitle}
                        </Link>
                    
                } 
                {
                    editing &&
                    <input
                        onChange={(event) => setCourseTitle(event.target.value)}
                        value={courseTitle}
                        className="form-control"/>
                }
            </td>
            <td className ="d-none d-md-table-cell">
                {
                    !editing && props.course.owner
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setOwner(event.target.value)}
                        value={owner}
                        className="form-control"/>
                }
            </td>
            <td className ="d-none d-lg-table-cell">
            {
                !editing && props.course.lastModified
            }
            {
                editing &&
                <input
                    onChange={(event) => setlastModified(event.target.value)}
                    value={lastModified}
                    className="form-control"/>
            }
            </td>

            <td>
                {
                    !editing &&
                    <button className="btn" onClick={setEditing(true)}>
                        <i className="fas fa-edit"></i>
                    </button>
                }
                {
                    editing &&
                    <button className="btn">
                        <i class="fas fa-check"></i>
                    </button>
                }
                {
                    editing &&
                    <button className="btn" onClick={() => {
                        props.deleteCourse(props.course._id);
                        setEditing(false)
                    }}>
                        <i className="fas fa-times"></i>
                    </button>
                }
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