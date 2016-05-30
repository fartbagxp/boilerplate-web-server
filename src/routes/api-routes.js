'use strict';

const routes = {};

routes.setup = function(server) {
  require('./get-health')(server);
};

module.exports = routes;
