'use strict';

const config = require('../config');
const swaggerSetup = require('./swagger-setup');
const routes = require('./routes/api-routes');

const Debug = require('debug');
const Hapi = require('hapi');

const appLogger = Debug('server:app');

let server;

const s = {};

/**
 * This function starts the server.
 */
s.start = function (cb) {

  server = new Hapi.Server;

  server.connection({
    host: config.host,
    port: config.port
  });

  // Setup documentation using swagger
  swaggerSetup(server);

  // Add the route
  server.route({
    method: 'GET',
    path: '/hello',
    handler: function (request, reply) {
      return reply('Hello World!');
    }
  });

  // setup the rest of the routes
  routes.setup(server);

  // Start the server
  server.start(function (err) {
    if (err) {
      throw err;
    }
    appLogger('Server running at:', server.info.uri);

    cb && cb(err);
  });
};

/**
 * This function stops the server from running.
 */
s.stop = function (cb) {

  appLogger('Stopping server');

  server.stop({
    timeout: 60 * 1000
  }, function (err) {
    cb && cb(err);
  });
};

module.exports = s;
