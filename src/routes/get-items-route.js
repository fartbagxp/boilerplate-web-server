'use strict';

var Joi = require('joi');
var swagger = require('./swagger');

// This is the schema that the handler should respond with.
var responseSchema = Joi.object({
  item: Joi.string().required().description('item')
});

/**
 * This is the function that will handle the API call for items.
 * @param  {[Object]} request The request from the request call.
 * @param  {[Object]} reply   The reply which we'll format.
 * @return {[Object]}         A reply message
 */
function getItemHandler(request, reply) {
  return reply({
    item: 'hello'
  });
}

/**
 * This function setup the API route for this demo API.
 *
 * @param  {[Object]} server  The server we've integrated with (Hapi, Express..)
 */
function setup(server) {
  server.route({
    method: 'GET',
    path: '/items',
    handler: getItemHandler,
    config: {
      description: 'Get the latest item.',
      notes: swagger.notes({
        notes: ['Show all status of the current running system.'],
        errors: [500, 501]
      }),
      tags: ['api'],
      response: {
        schema: responseSchema
      }
    }
  });
}

module.exports = setup;
