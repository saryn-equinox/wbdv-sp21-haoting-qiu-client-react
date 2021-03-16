import WidgetService from "../services/widget-service";

const FIND_ALL_WIDGETS_FOR_TOPIC = "FIND_ALL_WIDGETS_FOR_TOPIC";
const CREATE_WIDGET = "CREATE_WIDGET";
const DELETE_WIDGET = "DELETE_WIDGET";
const UPDATE_WIDGET = "UPDATE_WIDGET";

const createWidget = (dispatch, tid) => {
    WidgetService.createWidget(tid, {type : "Heading", size: 1, text : "Hello, World"})
    .then(widget => {
        dispatch({
            type : CREATE_WIDGET,
            widget
        });
    });
};

const findWidgetsForTopic = (dispatch, tid) => {
    WidgetService.findWidgetsForTopic(tid)
    .then(widgets => {
        dispatch({
            type : FIND_ALL_WIDGETS_FOR_TOPIC,
            widgets
        });
    });
};

const updateWidget = (dispatch, widget) => {
    WidgetService.updateWidget(widget.id, widget)
    .then(status => {
        dispatch({
            type : UPDATE_WIDGET,
            widget
        });
    });
};

const deleteWidget = (dispatch, widget) => {
    WidgetService.deleteWidget(widget.id)
    .then(status => {
        dispatch({
            type : DELETE_WIDGET,
            widgetToDelete : widget
        });
    });
};

const resetWidgets = (dispatch) => {
    dispatch({
        type : FIND_ALL_WIDGETS_FOR_TOPIC,
        widgets : []
    });
};

const widgetActions = {
    createWidget, findWidgetsForTopic, updateWidget, deleteWidget, resetWidgets
}

export default widgetActions