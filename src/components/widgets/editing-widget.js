// Widget in Edit mode
import React, {useState, useEffect} from 'react';

const EditingWidget = ({
    widget,
    setEditing,
    updateWidget,
    deleteWidget
}) => {
    const [widgetCache, setWidgetCache] = useState(widget);

    return (<div className="row">
            <div className="col">
                <select className="form-control"
                        onChange={(e) => {
                            setWidgetCache({...widgetCache, type: e.target.value})
                        }}>
                    <option>Heading</option>
                    <option>Paragraph</option>
                </select>
                <textarea className="form-control"
                    value={widgetCache.text}
                    onChange={(e) => {
                        setWidgetCache({...widgetCache, text: e.target.value})
                    }}>
                    
                </textarea>
                {
                    widgetCache.type === "Heading" &&
                    <select className="form-control"
                    onChange={(e) => {
                            setWidgetCache({...widgetCache, size: parseInt(e.target.value.slice(-1))})
                        }}
                    >
                    <option>Heading1</option>
                    <option>Heading2</option>
                    <option>Heading3</option>
                    <option>Heading4</option>
                    <option>Heading5</option>
                    <option>Heading6</option>
                </select>
                }
            </div>
            <div className="col">
                <i className="btn btn-outline-dark float-right fas fa-times"
                    style={{
                    color: 'red'
                }}
                onClick={() => deleteWidget(widgetCache)}></i>
                <i className="btn btn-outline-dark float-right fas fa-check" 
                    style={{
                    color: 'green'
                }}
                onClick={() => {
                        setEditing(false);
                        updateWidget(widgetCache);
                }}></i>
            </div>
        </div>);
};

export default EditingWidget;