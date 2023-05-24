import React, { useReducer, useState, useEffect, useRef } from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import ItemsList from './ItemsList';
import { initialItemsListVar } from './initialItemsListVar';
import { sendAddItem, sendEditItem, sendToggleItem } from './../API/index'

const itemsReducer = (state, action) => {
    let newId = state.length + 1;

    switch( action.type ){
        case 'addItem':
            return [
                ...state, 
                {
                    id: newId,
                    number: newId,
                    name: action.name,
                }
            ];
        case 'editItem':
            return state.map((item) => {
                if (action.item.itemId == item.id) {
                    return {...item, name: action.item.name}
                } else {
                    return item;
                }
            });
        
        case 'toggleItem':
            return state.map((item) => {
                if (action.id == item.id) {
                    return {...item, isActive: !item.isActive}
                } else {
                    return item;
                }
            });
    }
}

const Chat = () => {
    useEffect(() => {
        const connection = new HubConnectionBuilder()
            .withUrl('https://localhost:7103/hubs/itemList?token=123')
            .withAutomaticReconnect()
            .build();

        connection.start()
            .then(result => {
                console.log('Connected!');

                connection.on('AddItem', itemName => {
                    dispatch({
                        type: 'addItem',
                        name: itemName
                    });
                });
                
                connection.on('EditItem', item => {
                    dispatch({
                        type: 'editItem',
                        item: item,
                    })
                });
                
                connection.on('ToggleItem', itemId => {
                    dispatch({
                        type: 'toggleItem',
                        id: itemId,
                    })
                });
            })
            .catch(e => console.log('Connection failed: ', e));
    }, []);

    const [itemsListVar, dispatch] = useReducer(itemsReducer, initialItemsListVar);

    return (
        <div>
            <ItemsList itemsList={itemsListVar} addItem={sendAddItem} editItem={sendEditItem} toggleItem={sendToggleItem}/>
        </div>
    );
};

export default Chat;