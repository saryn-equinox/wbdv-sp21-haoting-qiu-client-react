import React, {useState} from 'react'
import {Link} from "react-router-dom";

const EditableItem = ({
    to,
    item,
    updateItem,
    deleteItem
}) => {
    const [editing, setEditing] = useState(false);
    const [itemCache, setItemCache] = useState(item);

    return (
            <span>
            {
                !editing &&
                <div className="row">
                    <div className="col-8 align-self-center">{item.title}</div>
                    <div className="col-4">
                        <i className="btn btn-outline-dark float-right fas fa-edit" 
                        onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
            {
                editing &&
                <div className="row">
                    <div className="col-8 align-self-center">
                        <input
                            onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                            value={itemCache.title}/>
                    </div>
                    <div className="col-auto">
                            <i className="btn btn-outline-dark float-right fas fa-times"
                                style={{
                                color: 'red'
                            }}
                            onClick={() => deleteItem(item)}></i>
                            <i className="btn btn-outline-dark float-right fas fa-check" 
                                style={{
                                color: 'green'
                            }}
                                onClick={() => {
                                        setEditing(false);
                                        updateItem(itemCache);
                            }}></i>
                    </div>
                </div>
            }
        </span>
    )
}

export default EditableItem