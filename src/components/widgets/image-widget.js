import React, {useState, useEffect} from 'react';
import EditingWidget from "./editing-widget";

const ImageWidget = ({
    widget,
    updateWidget,
    deleteWidget
}) => {
    const [editting, setEditing] = useState(false);

    return (<form>
            {
                !editting &&
                <>
                    <div className="row">
                        <div className="col">
                        <img src={widget.src} alt={widget.src} width={widget.width} height={widget.height} />
                        </div>
                        <div className="col">
                            <i className="btn btn-outline-dark float-right fas fa-cog" 
                                onClick={() => setEditing(true)}></i>
                        </div>
                    </div>
                </>
            }
            {
                editting &&
                <EditingWidget setEditing={setEditing} widget={widget} updateWidget={updateWidget} deleteWidget={deleteWidget}/>
            }
        </form>)
};

export default ImageWidget;