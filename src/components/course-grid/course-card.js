import React from 'react';
import {Link} from "react-router-dom";

const CourseCard = (props) => {return ( <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-xs-1 my-3">
        <div className="card">
            <img class="card-img-top" src="#" alt="Card image cap"></img>
            <div className="card-body">
                <h4 className="card-title">{props.course.title}</h4>
                <p className="card-text">Some description</p>
                <Link to="/courses/editor">
                    <a className="btn mx-1 btn-primary">{props.course.title}</a>
                </Link>
                <button className="btn">
                    <i className="fas fa-edit"></i>
                </button>
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
