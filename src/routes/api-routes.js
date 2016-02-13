'use strict';

var routes = {};

routes.setup = function(server) {
  require('./get-items-route')(server);
};

module.exports = routes;
