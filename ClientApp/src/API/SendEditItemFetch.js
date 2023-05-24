export const sendEditItem = async (item) => {
    
    try {
        await  fetch('https://localhost:7103/itemList/editItem', { 
            method: 'POST', 
            body: JSON.stringify(item),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }
    catch(e) {
        console.log('Sending message failed.', e);
    }
}