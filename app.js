const fastify = require('fastify');
const autoload = require('fastify-autoload');
const path = require('path');

const { IS_OFFLINE, JEST_WORKER_ID, SERVER_PORT } = process.env;

const loggerOptions =
	IS_OFFLINE || JEST_WORKER_ID
		? { logger: { prettyPrint: true } } //logger options for development
		: { logger: true }; // logger options for production

const app = fastify(loggerOptions);

//autoload plugins
app.register(autoload, {
	dir: path.join(__dirname, 'plugins'),
});

//autoload routes
app.register(autoload, {
	dir: path.join(__dirname, 'routes'),
	routeParams: true,
});

//start as a server if called directly
if (require.main === module) {
	// called directly i.e. "node app"

	const port = SERVER_PORT || 3000;
	app.listen(port, (err) => {
		if (err) console.error(err);
		app.log.info(`server listening on ${port}`);
	});
}

// export for exposure to jest and aws lambda
module.exports = app;
