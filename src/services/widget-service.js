const URL = "https://quiet-dawn-69062.herokuapp.com/api/";

const WidgetService = {
    /**
     * POST​s to ​/api/topics/{tid}/widgets 
     * a JSON object encoded as a string representing a new widget instance
     * @param {string} tid 
     * @param {object} widget 
     * @returns 
     */
    createWidget : (tid, widget) => {
        return fetch(`${URL}/topics/${tid}/widgets`, {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(widget)
        })
        .then(res => res.json());
    },

    /**
     * GET​s all widgets as a JSON array 
     * from ​/api/topics/{tid}/widgets for a topic whose ID is tid
     * @param {string} tid 
     * @returns 
     */
    findWidgetsForTopic : (tid) => {
        return fetch(`${URL}/topics/${tid}/widgets`, {
            method : "GET"
        })
        .then(res => res.json());
    },

    /**
     * PUT​s to ​/api/widgets/{wid}​ a JSON object encoded as a string representing an existing widget instance 
     * with new values for the attributes for a widget whose ID is wid
     * @param {string} wid 
     * @param {object} widget 
     * @returns 
     */
    updateWidget : (wid, widget) => {
        return fetch(`${URL}/widgets/${wid}`, {
            method : "PUT",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(widget)
        })
        .then(res => res.json());
    },

    /**
     * DELETE​s an existing widget whose ID is wid from ​/api/widgets/{wid}
     * @param {string} wid 
     * @returns 
     */
    deleteWidget : (wid) => {
        return fetch(`${URL}/widgets/${wid}`, {
            method : "DELETE"
        })
        .then(res => res.json());
    },

    /**
     * GET​s all widgets as a JSON array from ​/api/widgets
     * @returns 
     */
    findAllWidgets : () => {
        return fetch(`${URL}/widgets`, {
            method : "GET"
        })
        .then(res => res.json());
    },

    /**
     * GET​s a single widget as a JSON object from ​/api/widgets/{wid}
     * @param {string} wid 
     * @returns 
     */
    findWidgetById : (wid) => {
        return fetch(`${URL}/widgets/%{wid}`, {
            method : "GET"
        })
        .then(res => res.json());
    }
};

export default WidgetService;