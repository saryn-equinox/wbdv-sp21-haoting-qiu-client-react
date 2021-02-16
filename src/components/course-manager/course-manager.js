import React from 'react';
import "./course-manager.style.client.css"
import CourseTable from "../course-table/course-table"

const CourseManager = (props) => {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary justify-content-start position-fixed wbdv-course-manager-bar">
                <span className="navbar-brand w-auto">
                    <button className="btn btn-link btn-sm" type="button">
                        <i className="fas fa-align-justify fa-2x"></i>
                    </button>
                    <span className="d-none d-lg-inline">Course Manager</span>
                </span>
                <span className="input-group w-75">
                    <input type="text" className="mx-2 form-control rounded" placeholder="New Course Tittle" id="new-course-title" />
                    <span className="input-group-append">
                        <button className="mx-2 btn btn-danger rounded-circle" type="button">
                        <i className="fas fa-plus"></i>
                        </button>
                    </span>
                </span>
            </nav>

            <button className="wbdv-bottom-right-button mx-2 btn btn-lg btn-danger rounded-circle" type="button">
                    <i className="fas fa-plus fa-2x"></i>
            </button>
            <CourseTable />
        </div>
    )
}

export default CourseManager