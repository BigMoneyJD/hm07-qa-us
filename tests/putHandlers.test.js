// eslint-disable-next-line no-undef
const config = require('../config');

const requestBody = {
    "name": "Modifying Strudel Power",
    "productsList": [
        {
            "id": 2,
            "quantity": 6
        },
        {
            "id": 17,
            "quantity": 12
        }
    ]
};

test('Strudel Status', async () => {
    let strudelStatus;
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        strudelStatus = response.status;
    } catch (error) {
        console.error(error);
    }
    expect(strudelStatus).toBe(200);
});

test('Icing Power', async () => {
    let response, responseData;
    try {
        response = await fetch(`${config.API_URL}/api/v1/kits/6`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });

        console.log('Response status:', response.status);
        
        if(response.ok) {  
            responseData = await response.json();
            console.log('Response data:', responseData);
        } else {
            console.error('Response not OK:', response.status);
        }
    } catch (error) {
        console.error('Fetch error:', error);
    }

    expect(responseData).toBeDefined(); 
    expect(responseData.ok).toBe(true); 

});
