import React, { useState, useEffect } from 'react';
import './ItemsList.css';
import { Item } from './Item';

const ItemsList = (props) => (
    <div>
        <ul style={{ background: "#eee", borderRadius: '5px', padding: '0 10px' }}>
            {
            props.itemsList.map(
                (item) => (
                    <Item 
                        key={item.id}
                        id={item.id} 
                        number={item.number} 
                        name={item.name} 
                        isActive={item.isActive}
                        editItem={props.editItem} 
                        toggleItem={props.toggleItem} 
                    />
                )
            )}
        </ul>
        <button onClick={() => {
            let name = prompt("Add new Item");
            props.addItem(name);
        }}>Agregar</button>
    </div>
);

export default ItemsList;