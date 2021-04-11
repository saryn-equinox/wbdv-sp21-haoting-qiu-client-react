const QUIZZES_URL = 'https://course-managment-server-node.herokuapp.com/api/quizzes';

const QuestionService = {
    findQuestionsForQuiz : (qid) => {
        return fetch(`${QUIZZES_URL}/${qid}/questions`)
        .then(response => response.json())
    }
}

export default QuestionService;