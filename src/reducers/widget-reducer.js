const initalSates = {
    widgets : []
}

const widgetReducer = (state = initalSates, action) => {
    switch(action.type) {
        case "FIND_ALL_WIDGETS_FOR_TOPIC":
            return {
                ...state,
                widgets : action.widgets
            };
        case "CREATE_WIDGET":
            return {
                ...state,
                widgets : [
                    ...state.widgets,
                    action.widget
                ]
            };
        case "DELETE_WIDGET":
            return {
                ...state,
                widgets : state.widgets.filter(w => (w.id !== action.widgetToDelete.id))
            };
        case "UPDATE_WIDGET":
            return {
                ...state,
                widgets : state.widgets.map(w => (w.id === action.widget.id) ? action.widget : w)
            };
        default:
            return state;
    }
}

export default widgetReducer;