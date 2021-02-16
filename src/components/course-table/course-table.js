import React from 'react';
import CourseRow from "./course-row"

class CourseTable extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
      }

    render () {
        return (<div className="container-fulid wbdv-course-list">
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
                        <button type="button" className="btn mx-1 btn-light">
                            <i class="fas fa-th"></i>
                        </button>
                    </th>
                </tr>
            </thead>
            <tbody>
                    <CourseRow />
                    <CourseRow />
                    <CourseRow />
                    <CourseRow />
                    <CourseRow />
                    <CourseRow />
                    <CourseRow />
                    <CourseRow />
                    <CourseRow />
                    <CourseRow />
                    <CourseRow />
            </tbody>
            </table>
        </div>)
    }

}

export default CourseTable