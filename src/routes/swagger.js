'use strict';

/**
 * Swagger (API documentation) helpers and response objects
 */

var _ = require('lodash');

// HTML error codes with custom descriptions
var errorCodes = {
  304: 'Not Modified - Resource was not modified',
  400: 'Bad Request - Client request was malformed or could not be fulfilled',
  404: 'Not Found - API endpoint/resource/page not found',
  408: 'Request Time-out - Long-polling request timed out with no new updates',
  500: 'Internal Server Error - Unhandled exception on the server side',
  501: 'Not Implemented - This feature is not yet implemented'
};

var swagger = {

  // Generate a swagger-compatible array of implementation notes followed
  // by any error codes
  notes: function notes(opts) {
    opts.notes = opts.notes || [];
    opts.errors = opts.errors || [];

    var retVal = [];

    _.each(opts.notes, function (note) {
      retVal.push(note);
    });

    if (opts.errors.length > 0) {
      retVal.push('Error status codes');
      _.each(opts.errors, function (code) {
        if (_.has(errorCodes, code)) {
          retVal.push(code + ',' + errorCodes[code]);
        }
      });
    }

    return retVal;
  }
};

// Public export
module.exports = swagger;
