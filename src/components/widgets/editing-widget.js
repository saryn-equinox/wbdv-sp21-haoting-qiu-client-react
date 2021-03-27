// Widget in Edit mode
import React, {useState, useEffect} from 'react';

const EditingWidget = ({
    widget,
    setEditing,
    updateWidget,
    deleteWidget
}) => {
    const IMAGE = "IMAGE";
    const HEADING = "HEADING";
    const LIST = "LIST";
    const PARAGRAPH = "PARAGRAPH";
    const [widgetCache, setWidgetCache] = useState(widget);

    return (<div className="row">
            <div className="col">
                <select className="form-control"
                        onChange={(e) => {
                            setWidgetCache({...widgetCache, type: e.target.value})
                        }}
                        value={widgetCache["type"]}>
                    <option>{HEADING}</option>
                    <option>{PARAGRAPH}</option>
                    <option>{IMAGE}</option>
                    <option>{LIST}</option>
                </select>
                {   

                    widgetCache.type === HEADING &&
                    <>
                        <textarea className="form-control"
                        value={widgetCache.text}
                        onChange={(e) => {
                            setWidgetCache({...widgetCache, text: e.target.value})
                        }} />
                        <select className="form-control"
                            onChange={(e) => {
                                setWidgetCache({...widgetCache, size: parseInt(e.target.value.slice(-1))})
                        }}>
                        <option>Heading1</option>
                        <option>Heading2</option>
                        <option>Heading3</option>
                        <option>Heading4</option>
                        <option>Heading5</option>
                        <option>Heading6</option>
                    </select>
                </>
                }
                {
                    widgetCache.type === PARAGRAPH &&
                    <>
                        <textarea className="form-control"
                        value={widgetCache.text}
                        onChange={(e) => {
                            setWidgetCache({...widgetCache, text: e.target.value})
                        }} />
                    </>
                }
                {
                    widgetCache.type === IMAGE &&
                    <>
                        <textarea className="form-control"
                        placeholder={`Image URL`}
                        onChange={(e) => {
                            setWidgetCache({...widgetCache, src: e.target.value})
                        }} />
                        <textarea className="form-control"
                        placeholder={`Image Width`}
                        onChange={(e) => {
                            setWidgetCache({...widgetCache, width: e.target.value})
                        }} />
                        <textarea className="form-control"
                        placeholder={`Image Height`}
                        onChange={(e) => {
                            setWidgetCache({...widgetCache, height: e.target.value})
                        }} />                                                
                    </>
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