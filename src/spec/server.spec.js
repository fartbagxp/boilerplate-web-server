'use strict';

const async = require('async');
const server = require('../server');
const expect = require('chai').expect;

describe('Server setup testing.', function () {
  it('Ensure the server can be started correctly.',
    function (done) {

      const steps = [];

      steps.push(function(cb) {
        server.start(cb);
      });

      steps.push(function(cb) {
        server.stop(cb);
      });

      async.waterfall(steps, function(err) {
        expect(err).to.be.null;
        done();
      });
    });
});
