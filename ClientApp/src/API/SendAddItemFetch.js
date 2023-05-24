export const sendAddItem = async (itemName) => {
    try {
        await  fetch('https://localhost:7103/itemList/addItem', { 
            method: 'POST', 
            body: JSON.stringify(itemName),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    catch(e) {
        console.log('Sending message failed.', e);
    }
}