const Hapi = require('@hapi/hapi');
const routes = require('./router');

const init = async () => {
  const server = Hapi.server({
    port: 9000,
    host: 'localhost',
  });

  server.route(routes);

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

init().catch((err) => {
  console.error(err);
  process.exit(1);
});