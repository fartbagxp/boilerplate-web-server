'use strict';


var config = require('../config');
var swaggerSetup = require('./swagger-setup');
var routes = require('./routes/api-routes');

var Debug = require('debug');
var Hapi = require('hapi');

var appLogger = Debug('server:app');

var server = new Hapi.Server();

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
  handler: function(request, reply) {
    return reply('hello world');
  }
});

// setup the rest of the routes
routes.setup(server);

// Start the server
server.start(function(err) {
  if (err) {
    throw err;
  }
  appLogger('Server running at:', server.info.uri);
});
