const urlWithLessonId = "https://wbdv-generic-server.herokuapp.com/api/001300329/lessons";
const urlWithTopicId = " https://wbdv-generic-server.herokuapp.com/api/001300329/topics";

const TopicService = {
    /**
     * creates a new topic instance for the lesson whose ID is lessonId
     * @param {string} lessonId 
     * @param {object} topic 
     */
    createTopic : (lessonId, topic) => {
        return fetch(`${urlWithLessonId}/${lessonId}/topics`, {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(topic)
        }).then(res => res.json());
    },
    /**
     * retrieves all topics for lesson whose ID is lessonId
     * @param {string} lessonId 
     */
    findTopicsForLesson : (lessonId) => {
        return fetch(`${urlWithLessonId}/${lessonId}/topics`, {
            method : "GET"
        }).then(res => res.json());
    },
    /**
     * retrieves one topic whose ID is topicId (optional)
     * @param {string} topicId 
     */
    findTopic : (topicId) => {
        return fetch(`${urlWithTopicId}/${topicId}`, {
            method : "GET"
        }).then(res => res.json());
    },
    /**
     * updates one topic whose ID is topicId
     * @param {string} topicId 
     * @param {object} topic 
     */
    updateTopic : (topicId, topic) => {
        return fetch(`${urlWithTopicId}/${topicId}`, {
            method : "PUT",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(topic)
        }).then(res => res.json());
    },
    /**
     * removes topic whose ID is topicId
     * @param {string} topicId 
     */
    deleteTopic : (topicId) => {
        return fetch(`${urlWithTopicId}/${topicId}`, {
            method : "DELETE"
        }).then(res => res.json());
    }
}

export default TopicService