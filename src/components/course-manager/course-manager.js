import React, {useState, useEffect} from 'react';
import "./course-manager.style.client.css"
import CourseTable from "../course-table/course-table"
import CourseGrid from "../course-grid/course-grid"
import CourseService from "../../services/course-service"
import {Link, Switch, Route} from "react-router-dom"


const CourseManager = (props) => {
    const [courseService, setCourseSevice] = useState(new CourseService());
    let [courses, setCourses] = useState([]);
    let [newCourseTitle, setNewCourseTitle] = useState("");
    const [date, setDate] = useState(new Date());

    // fetch all courses (on first render)
    useEffect(() => {
        courseService.findAllCourses()
            .then(data => {
                setCourses(data.reverse());
                console.log(courses);
        });
    }, []);

    const handleCourseTitleChange = (event) => setNewCourseTitle(event.target.value);
    
    const deleteCourse = (courseId) => {
        courseService.deleteCourse(courseId)
                .then(status => {
                    setCourses(courses.filter(c => c._id !== courseId));
                });
    }

    const createCourse = () => {
        let course = {
            "title" : newCourseTitle, 
            "lastModified" : date.getFullYear() + "/" + date.getMonth() + "/" + date.getDate()
        }
        courseService.createCourse(course)
            .then(data => {
                setNewCourseTitle("");
                const temp = courses.slice();
                temp.splice(0,0, data);
                setCourses(temp);
            });
    }

    return (
        <div>
            <Link to="/courses/table" ></Link>
            <Link to="/courses/grid" ></Link>

            <nav className="navbar navbar-dark bg-primary justify-content-start position-fixed wbdv-course-manager-bar">
                <span className="navbar-brand w-auto">
                    <button className="btn btn-link btn-sm" type="button">
                        <i className="fas fa-align-justify fa-2x"></i>
                    </button>
                    <span className="d-none d-lg-inline">Course Manager</span>
                </span>
                <span className="input-group w-75">
                    <input type="text" 
                            className="mx-2 form-control rounded" 
                            placeholder="New Course Tittle" 
                            id="new-course-title" 
                            value={newCourseTitle}
                            onChange={handleCourseTitleChange}
                            />
                    <span className="input-group-append">
                        <button className="mx-2 btn btn-danger rounded-circle" 
                                onClick={createCourse}
                                type="button">
                        <i className="fas fa-plus"></i>
                        </button>
                    </span>
                </span>
            </nav>

            <button className="wbdv-bottom-right-button mx-2 btn btn-lg btn-danger rounded-circle" type="button" 
                    onClick={createCourse}
                >
                <i className="fas fa-plus"></i>
            </button>

            <Switch>
                <Route path="/courses/grid">
                    <CourseGrid courses={courses} deleteCourse={deleteCourse} />
                </Route>
                <Route path="/courses/table">
                    <CourseTable courses={courses} deleteCourse={deleteCourse} />
                </Route>
            </Switch>
        </div>
    )
}

export default CourseManager