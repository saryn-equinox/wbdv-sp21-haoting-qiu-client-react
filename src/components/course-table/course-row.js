import React from 'react';

const CourseRow = (props) => {
    return (
         <tr>
            <td>
                <a href="#">
                    <i className="fas fa-file"></i>
                    {props.title}
                </a>
            </td>
            <td className ="d-none d-md-table-cell">{props.owner}</td>
            <td className ="d-none d-lg-table-cell">{props.lastModified}</td>
            <td>
                <button className="btn">
                    <i className="fas fa-edit"></i>
                </button>
                <button className="btn">
                    <i className="fas fa-trash"></i>
                </button>
            </td>
        </tr>
    )
}

CourseRow.defaultProps = {
    title : "CS5610 Web Development",
    owner : "Haoting Qiu",
    lastModified : "01/01/2021"
}

export default CourseRow