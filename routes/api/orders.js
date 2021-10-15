async function routes(fastify, options) {
	fastify.get('/orders', {}, async (request, reply) => {
		return { hello: 'world' };
	});

	fastify.post('/orders', {}, async (request, reply) => {
		return { hello: 'world' };
	});

	fastify.put('/orders', {}, async (request, reply) => {
		return { hello: 'world' };
	});

	fastify.delete('/orders', {}, async (request, reply) => {
		return { hello: 'world' };
	});
}

module.exports = routes;
