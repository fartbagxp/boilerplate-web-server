'use strict';

const server = require('./src/server');

server.start(function() {});

module.exports = require('./src/server');
