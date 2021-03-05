import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Link, useParams} from "react-router-dom";
import ModuleService from "../../services/module-service";
const ModuleList = ({
    courseId,
    modules = [],
    findModulesForCourse,
    updateModule,
    deleteModule,
    createModule
}) => {
    useEffect(() => {
        findModulesForCourse(courseId) 
    }, []);

    return (
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
    )
}

const stpm = (state) => {
    return {
        modules : state.moduleReducer.modules
    }
}

const dtpm = (dispatch) => {
    return {
        findModulesForCourse : (courseId) => {
            ModuleService.findModulesForCourse(courseId)
            .then(data => {
                dispatch({
                    type : "FIND_MODULES_FOR_COURSE",
                    modules : data
                })
            })
        },
        updateModule : (module) => {
            ModuleService.updateModule(module._id, module)
            .then(status => {
                dispatch({
                    type : "UPDATE_MODULE",
                    module
                })
            })
        },
        deleteModule : (module) => {
            ModuleService.deleteModule(module._id)
            .then(status => {
                dispatch({
                    type : "DELETE_MODULE",
                    moduleToDelete : module
                })
            })
        },
        createModule : (courseId) => {
            ModuleService.createModule(courseId, {title : "New Module"})
            .then(data => {
                dispatch({
                    type : "CREATE_MODULE",
                    module : data
                })
            })
        }
    }
}

export default connect(stpm, dtpm)(ModuleList);