import React from 'react';
import CourseRow from "./course-row";
import {Link} from "react-router-dom";

class CourseTable extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render () {
        return (<div className="wbdv-course-list">
            <table className="table table-hover">
            <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col" className ="d-none d-md-table-cell">Owned By</th>
                    <th scope="col" className ="d-none d-lg-table-cell">Last Modified</th>
                    <th scope="col">
                        <button type="button" className="btn mx-1 btn-light">
                            <i className="fas fa-folder"></i>
                        </button>
                        <button type="button" className="btn mx-1 btn-light">
                            <i className="fas fa-sort-alpha-down"></i>
                        </button>
                        <Link to="/courses/grid">
                            <button type="button" className="btn mx-1 btn-light">
                                <i class="fas fa-th"></i>
                            </button>
                        </Link>
                    </th>
                </tr>
            </thead>
            <tbody>
                    {
                        this.props.courses.map((c, idx) => <CourseRow key={c._id} 
                                                                    course={c} 
                                                                    deleteCourse={this.props.deleteCourse}
                                                                    updateCourse={this.props.updateCourse} />)
                    }
            </tbody>
            </table>
        </div>)
    }

}

export default CourseTable