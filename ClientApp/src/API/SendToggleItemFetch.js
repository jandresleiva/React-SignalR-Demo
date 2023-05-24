export const sendToggleItem = async (itemId) => {
    console.log('toggling');
    console.log(JSON.stringify(itemId));
    try {
        await  fetch('https://localhost:7103/itemList/toggleItem', { 
            method: 'POST', 
            body: JSON.stringify(itemId),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    catch(e) {
        console.log('Sending message failed.', e);
    }
}