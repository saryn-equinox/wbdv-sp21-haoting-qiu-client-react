//  https://wbdv-generic-server.herokuapp.com/api/YOUR_NEUID/modules/MODULE_ID
const urlWithCourseId = "https://wbdv-generic-server.herokuapp.com/api/001300329/courses";
const urlWithModuleId =  "https://wbdv-generic-server.herokuapp.com/api/001300329/modules/";

const ModuleService = {

    /**
     * creates a new module instance for the course whose ID is courseId
     * @param {string} courseId - courseId 
     * @param {object} module  - new module
     */
    createModule: (courseId, module) => {
        return fetch(`${urlWithCourseId}/${courseId}/modules`, {
            method : "POST",
            headers : {
                "content-tpye" : "application/json"
            },
            body : JSON.stringify(module)
        }).then(res => res.json());
    },

    /**
     * retrieves all modules for course whose ID is courseId
     * @param {string} courseId - courseId
     */
    findModulesForCourse : (courseId) => {
        return fetch(`${urlWithCourseId}/${courseId}/modules`, {
            method : "GET"
        }).then(res => res.json());
    },

    /**
     * retrieves one module whose ID is moduleId (optional)
     * @param {string} moduleId 
     */
    findModule: (moduleId) => {
        return fetch(`${urlWithModuleId}/${moduleId}`, {
            method : "GET"
        }).then(res => res.json());
    },
    /**
     * updates one module whose ID is moduleId
     * @param {string} moduleId 
     * @param {object} module 
     */
    updateModule : (moduleId, module) => {
        return fetch(`${urlWithModuleId}/${moduleId}`, {
            method : "PUT",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(module)
        }).then(res => res.json());
    },
    /**
     * removes module whose ID is moduleId
     * @param {string} moduleId 
     */
    deleteModule : (moduleId) => {
        return fetch(`${urlWithModuleId}/${moduleId}`, {
            method : "DELETE"
        }).then(res => res.json());
    }
}

export default ModuleService;