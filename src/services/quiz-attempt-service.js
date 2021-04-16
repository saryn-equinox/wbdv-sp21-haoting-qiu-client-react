const QUIZZES_URL = 'https://course-managment-server-node.herokuapp.com/api/quizzes';

const QuizAttemptService = {
    findAttemptsForQuiz : (qid) => {
        return fetch(`${QUIZZES_URL}/${qid}/attempts`)
        .then(res => res.json())
    }
}

export default QuizAttemptService;