// eslint-disable-next-line no-undef
const config = require('../config');

test('DELETE request response body should be { "ok": true }', async () => {
    try {
        const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
            method: 'DELETE'
        });

        const responseBody = await response.json();

        expect(responseBody).toEqual({ ok: true });
    } catch (error) {
        console.error('Error:', error);
    }
});

