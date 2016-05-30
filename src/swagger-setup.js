'use strict';

const Debug = require('debug');
const HapiSwagger = require('hapi-swagger');
const Inert = require('inert');
const Vision = require('vision');
const Pack = require('../package');

// Setup the loggers
const swaggerLogger = Debug('server:swagger');

const swaggerOptions = {
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
    function (err) {
      if (err) {
        swaggerLogger('hapi-swagger load error: ', err);
      } else {
        swaggerLogger('hapi-swagger interface loaded');
      }
    });
}

module.exports = setup;
