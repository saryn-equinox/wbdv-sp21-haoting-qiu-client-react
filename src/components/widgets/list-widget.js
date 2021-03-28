import React, {useState, useEffect} from 'react';
import EditingWidget from "./editing-widget";

const ListWidget = ({
    widget,
    updateWidget,
    deleteWidget
}) => {
    const [editting, setEditing] = useState(false);
    const [items, setItems] = useState(widget.text.split("\n"));

    return (<form>
        {   
            !editting &&
            <>
                <div className="row">
                    <div className="col-auto">
                        {widget["ordered"] &&
                            <ol>
                                {items.map(i => <li>{i}</li>)}
                            </ol>
                        }
                        {!widget["ordered"] &&
                            <ul>
                                {items.map(i => <li>{i}</li>)}
                            </ul>
                        }
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

export default ListWidget;