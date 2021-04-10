import React, {useState, useEffect} from 'react';
import {Link, useParams} from "react-router-dom";
import {connect} from "react-redux";
import QuizService from "../../services/quiz-service";

const Quizzes = (props) => {
    const {courseId} = useParams();
    const [quizzes, setQuizzes] = useState([])

    useEffect(() => {
        if (courseId !== "undefined" && typeof courseId !== "undefined") {
            QuizService.findAllQuizzes()
            .then(q => setQuizzes(q))
        }
    }, [courseId]);

    return(
        <div>
            <h2>Quizzes</h2>
            <div className="list-group">
                {
                    quizzes.map((quiz) => {
                        return(
                            <Link
                                to={`/courses/${courseId}/quizzes/${quiz._id}`}
                                className="list-group-item"
                                key={quiz._id}>
                                {quiz.title}
                            </Link>
                        )
                    })
                }
            </div>
        </div>
    );
}


export default Quizzes;