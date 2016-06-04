'use strict';

const async = require('async');
const config = require('../../config');
const server = require('../server');
const request = require('superagent');
const expect = require('chai').expect;

describe('Server setup testing.', function () {
  it('Ensure the server can be started correctly.',
    function (done) {

      const steps = [];

      const uri = config.host + ':' + config.port;

      steps.push(function(cb) {
        server.start(cb);
      });

      steps.push(function(cb) {
        request
          .get(uri + '/hello')
          .end(function(err, res){
            expect(err).to.be.null;
            expect(res.status).to.equal(200);
            expect(res.text).to.equal('Hello World!');
            cb && cb(err);
          });
      });

      steps.push(function(cb) {
        server.stop(cb);
      });

      async.waterfall(steps, function(err, result) {
        expect(err).to.be.undefined;
        expect(result).to.be.undefind;
        done();
      });
    });
});
