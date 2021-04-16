import React, {useState, useEffect} from "react";
import QuizAttemptService from "../../services/quiz-attempt-service";
import {useParams} from "react-router-dom";

const QuizAttempts = () => {
    const {courseId, quizId} = useParams();
    const [attempts, setAttempts] = useState([]);

    useEffect(() => {
        QuizAttemptService.findAttemptsForQuiz(quizId)
        .then(data => setAttempts(data))
    }, []);

    return (<>
    <h2>Quiz {quizId}</h2>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">Attempts</th>
            <th scope="col">Score</th>
        </tr>
        </thead>
        <tbody>
            {
                attempts.map((attemp, idx) => {
                    return (<tr>
                        <th scope="row">{idx + 1}</th>
                        <td>{attemp.score}</td>
                    </tr>)
                })
            }
        </tbody>
    </table>
    </>);
}

export default QuizAttempts;