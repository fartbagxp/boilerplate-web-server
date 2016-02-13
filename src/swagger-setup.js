'use strict';

var Debug = require('debug');
var HapiSwagger = require('hapi-swagger');
var Inert = require('inert');
var Vision = require('vision');
var Pack = require('../package');

// Setup the loggers
var swaggerLogger = Debug('server:swagger');

var swaggerOptions = {
  info: {
    title: 'Test API Documentation',
    version: Pack.version
  },
  documentationPath: '/doc'
};

// Register the Swagger options
function setup(server) {
  server.register(
    [
      Inert,
      Vision, {
        register: HapiSwagger,
        options: swaggerOptions
      }
    ],
    function(err) {
      if (err) {
        swaggerLogger('hapi-swagger load error: ', err);
      } else {
        swaggerLogger('hapi-swagger interface loaded');
      }
    });
}

module.exports = setup;
