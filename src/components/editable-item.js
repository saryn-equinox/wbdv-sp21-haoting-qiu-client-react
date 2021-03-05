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
            <>
            {
                !editing &&
                <div>
                    {item.title}
                    <button className="btn btn-outline-dark float-right">
                            <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                    </button>
                </div>
            }
            {
                editing &&
                <div>
                    <input
                        onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                        value={itemCache.title}/>
                    <button className="btn btn-outline-dark float-right">
                        <i onClick={() => deleteItem(item)} className="fas fa-times"
                            style={{
                            color: 'red'
                        }}></i>
                    </button>
                    <button className="btn btn-outline-dark float-right">
                        <i onClick={() => {
                            setEditing(false);
                            updateItem(itemCache);
                            // console.log("Clicked!")
                        }} className="fas fa-check" 
                            style={{
                            color: 'green'
                        }}></i>
                    </button>
                </div>
            }
        </>
    )
}

export default EditableItem