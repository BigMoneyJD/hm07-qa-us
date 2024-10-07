// eslint-disable-next-line no-undef
const config = require('../config');

test('GET /warehouses: status should be 200', async () => {
	try {
		const response = await fetch(`${config.API_URL}/api/v1/warehouses`, {
			method: 'GET',
		});
		expect(response.status).toBe(200);
	} catch (error) {
		console.error(error);
	}
})
;
