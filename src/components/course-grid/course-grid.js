import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";


const CourseGrid = (props) => {

  return (<div className="container-fluid wbdv-course-grid">
         <div className="row justify-content-end">
            <div className="col-4 align-self-center d-none d-md-block">
                Recent Courses
            </div>
            <div className="col-4 align-self-center d-none d-md-block">
                Owned by me
            </div>
            <div className="col-auto align-self-center">
                <button type="button" className="btn mx-1 btn-light">
                    <i className="fas fa-folder"></i>
                </button>
                <button type="button" className="btn mx-1 btn-light">
                    <i className="fas fa-sort-alpha-down"></i>
                </button>
                <Link to="/courses/table">
                    <button type="button" className="btn mx-1 btn-light">
                        <i class="fas fa-th"></i>
                    </button>
                </Link>
            </div>
         </div>
        <div className="row">
            {
                props.courses.map(c => <CourseCard key={c._id} 
                                                    course={c}
                                                    deleteCourse={props.deleteCourse}
                                                    updateCourse={props.updateCourse} />)
            }
        </div>
  </div>)
}

export default CourseGrid