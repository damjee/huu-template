const app = require('../app');

test('orders get', async () => {
	const res = await app.inject({
		method: 'GET',
		url: '/api/orders',
	});

	// expect(res.statusCode).toBe(200);
	expect(JSON.parse(res.payload)).toMatchObject({ hello: 'world' });
});

test('orders post', async () => {
	const res = await app.inject({
		method: 'POST',
		url: '/api/orders',
	});

	// expect(res.statusCode).toBe(200);
	expect(JSON.parse(res.payload)).toMatchObject({ hello: 'world' });
});

test('orders put', async () => {
	const res = await app.inject({
		method: 'PUT',
		url: '/api/orders',
	});

	// expect(res.statusCode).toBe(200);
	expect(JSON.parse(res.payload)).toMatchObject({ hello: 'world' });
});

test('orders delete', async () => {
	const res = await app.inject({
		method: 'DELETE',
		url: '/api/orders',
	});

	// expect(res.statusCode).toBe(200);
	expect(JSON.parse(res.payload)).toMatchObject({ hello: 'world' });
});