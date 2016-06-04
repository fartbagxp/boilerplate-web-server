'use strict';

const _ = require('lodash');

const config = {
  host: process.env.SERVER_HOST,
  port: process.env.SERVER_PORT
};

if(_.isUndefined(config.host)) {
  config.host = '127.0.0.1';
}

if(_.isUndefined(config.port)) {
  config.port = 8080;
}

module.exports = config;
