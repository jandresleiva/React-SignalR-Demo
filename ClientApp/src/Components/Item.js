import React from 'react';

function editItem(props) {
    let newName = prompt("Edit item");
    props.editItem({
        itemId: props.id + "",
        name: newName,
    });
}

export const Item = (props) => (
    <li 
        className={props.isActive === true ? 'active': ''}
        key={props.id} 
        onDoubleClick={(e) => {
            e.stopPropagation();
            props.toggleItem(props.id)
        }}
    >
        <span>{props.number}</span> - <span>{props.name}</span> - <button onClick={() => {return editItem(props);}}>Edit</button>
    </li>
);