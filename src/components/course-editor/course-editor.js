import React from 'react';
import "./course-editor.style.client.css";
import {useHistory, Link} from "react-router-dom";

const CourseEditor = (props) => {
    let history = useHistory();

    return(<div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top flex-fill">
            <span className="navbar-brand">
                    <button className="btn-dark btn" onClick={() => history.goBack()}>
                        <i className="fas fa-times"></i>
                    </button>
                CS5610 - WebDev
            </span>
            <button className="navbar-toggler" type="button" data-toggle="collapse"
                    data-target="#navbar-nav-dropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                    aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbar-nav-dropdown">
                <ul className="nav navbar-nav nav-fill w-100">
                    <li className="nav-item">
                        <a className="nav-link" role="button">Builder</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" role="button">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" role="button">Theme</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" role="button">Store</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" role="button">Apps</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" role="button">Settings</a>
                    </li>
                    <a className="nav-item nav-link" role="button">
                        <i className="fas fa-plus"></i>
                    </a>
            </ul>
            </div>
        </nav>
        
        <div className="row wbdv-course-dashboard">
            <div className="col-3 mx-2">
                <div className="list-group wbdv-course-module" role="tablist">
                    <a className="list-group-item list-group-item-action rounded-0" data-toggle="list" role="tab">
                        Module 1
                        <button className="btn pull-right btn-outline-dark float-right">
                            <i className=" fa fa-trash"></i>
                        </button>
                    </a>
                    <a className="list-group-item list-group-item-action rounded-0" data-toggle="list" role="tab">
                        Module 2
                        <button className="btn pull-right btn-outline-dark float-right">
                            <i className=" fa fa-trash"></i>
                        </button>
                    </a>
                    <a className="list-group-item list-group-item-action rounded-0" data-toggle="list" role="tab">
                        Module 3
                        <button className="btn pull-right btn-outline-dark float-right">
                            <i className=" fa fa-trash"></i>
                        </button>
                    </a>
                    <a className="list-group-item list-group-item-action rounded-0" data-toggle="list" role="tab">
                        Module 4
                        <button className="btn pull-right btn-outline-dark float-right">
                            <i className=" fa fa-trash"></i>
                        </button>
                    </a>
                    <a className="list-group-item list-group-item-action rounded-0" data-toggle="list" role="tab">
                        Module 5
                        <button className="btn pull-right btn-outline-dark float-right">
                            <i className=" fa fa-trash"></i>
                        </button>
                    </a>
                    <a className="list-group-item list-group-item-action rounded-0" data-toggle="list" role="tab">
                        Module 6
                        <button className="btn pull-right btn-outline-dark float-right">
                            <i className=" fa fa-trash"></i>
                        </button>
                    </a>
                    <a className="list-group-item list-group-item-action rounded-0" data-toggle="list" role="tab">
                        Module 7
                        <button className="btn pull-right btn-outline-dark float-right">
                            <i className=" fa fa-trash"></i>
                        </button>
                    </a>
                    <button
                            className="btn btn-primary list-group-item list-group-item-action d-flex justify-content-end my-2"
                            type="button">
                        <i className="fas fa-plus"></i>
                    </button>
                </div>
            </div>

            <div className="col-8 mx-2">
                <div className="row d-inline wbdv-course-topics">
                    <ul className="nav nav-fill nav-pills">
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-toggle="tab" role="tab">Topic 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-toggle="tab" role="tab">Topic 2</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-toggle="tab" role="tab">Topic 3</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" data-toggle="tab" role="tab">Topic 4</a>
                        </li>
                        <button
                                className="btn btn-outline-dark justify-content-end"
                                type="button">
                            <i className="fas fa-plus"></i>
                        </button>
                    </ul>
                </div>
            </div>
        </div>
    </div>)
}

export default CourseEditor