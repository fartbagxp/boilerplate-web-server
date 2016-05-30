'use strict';

const Joi = require('joi');
const swagger = require('./swagger');

// This is the schema that the handler should respond with.
const responseSchema = Joi.string().required().description('item');

/**
 * This is the function that will handle the API call for items.
 * @param  {[Object]} request The request from the request call.
 * @param  {[Object]} reply   The reply which we'll format.
 * @return {[Object]}         A reply message
 */
function getHealthStatus(request, reply) {
  return reply('Health and Status!').code(200);
}

/**
 * This function setup the API route for this demo API.
 *
 * @param  {[Object]} server  The server we've integrated with (Hapi, Express..)
 */
function setup(server) {
  server.route({
    method: 'GET',
    path: '/health',
    handler: getHealthStatus,
    config: {
      description: 'Get the latest health and status.',
      notes: swagger.notes({
        notes: ['Get the health and status of the system.']
      }),
      tags: ['api'],
      response: {
        schema: responseSchema
      }
    }
  });
}

module.exports = setup;
