const urlWithModuleId = "https://wbdv-generic-server.herokuapp.com/api/001300329/modules/";
const urlWithLessonId = " https://wbdv-generic-server.herokuapp.com/api/001300329/lessons/";

const LessonService = {
    /**
     * creates a new lesson instance for the module whose ID is moduleId
     * @param {string} moduleId 
     * @param {object} lesson 
     */
    createLesson : (moduleId, lesson) => {
        return fetch(`${urlWithModuleId}/${moduleId}/lessons`, {
            method : "POST",
            headers : {
                "content-type" : "applicatoin/json"
            },
            body : JSON.stringify(lesson)
        }).then(res => res.json());
    },
    /**
     * retrieves all lessons for course whose ID is moduleId
     * @param {string} moduleId 
     */
    findLessonsForModule : (moduleId) => {
        return fetch(`${urlWithModuleId}/${moduleId}/lessons`, {
            method : "GET",
        }).then(res => res.json());
    },
    /**
     * retrieves one lesson whose ID is lessonId (optional)
     * @param {string} lessonId 
     */
    findLesson : (lessonId) => {
        return fetch(`${urlWithLessonId}/${lessonId}`, {
            method : "GET"
        }).then(res => res.json());
    },
    /**
     * updates one lesson whose ID is lessonId
     * @param {string} lessonId 
     * @param {object} lesson 
     */
    updateLesson : (lessonId, lesson) => {
        return fetch(`${urlWithLessonId}/${lessonId}`, {
            method : "PUT",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(lesson)
        }).then(res => res.json());
    },
    /**
     * removes lesson whose ID is lessonId
     * @param {string} lessonId 
     */
    deleteLesson : (lessonId) => {
        return fetch(`${urlWithLessonId}/${lessonId}`, {
            method : "DELETE"
        }).then(res => res.json());
    }
}

export default LessonService