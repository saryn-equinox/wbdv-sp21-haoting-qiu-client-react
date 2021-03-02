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
                <>
                    <Link to={to}>
                        {item.title}
                    </Link>
                    <button className="btn pull-right btn-outline-dark float-right">
                            <i onClick={() => setEditing(true)} className="fas fa-edit"></i>
                    </button>
                </>
            }
            {
                editing &&
                <>
                    <input
                        onChange={(e) => setItemCache({...itemCache, title: e.target.value})}
                        value={itemCache.title}/>

                    <button className="btn pull-right btn-outline-dark float-right">
                        <i onClick={() => {
                            setEditing(false)
                            updateItem(itemCache)
                        }} className="fas fa-check" 
                            style={{
                            color: 'green'
                        }}></i>
                        <i onClick={() => deleteItem(item)} 
                            className="fas fa-times"
                            style={{
                            color: 'red'
                        }}></i>
                    </button>
                </>
            }
        </>
    )
}