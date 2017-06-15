'use strict';

var assert = require('assert');
var path = require('path');
var test = require('test');
var mock = require('ruff-mock');
var when = mock.when;

var driverRunner = require('ruff-driver-runner');

var driverPath = path.join(__dirname, '..');

module.exports = {
  'test adc value': function(done) {
    driverRunner.run(driverPath, function(error, context) {
      var inputs = context.inputs;
      var device = context.device;
      var adc = inputs['adc'];

      when(adc).getVoltage(Function).then(function(callback) {
        callback(undefined, 3);
      });

      device.getSoilHumidity(function(error, humidity) {
        if (error) {
          done(error);
          return;
        }
        assert.equal(humidity, 0.600);
        done();
      });
    });
  }
};

test.run(module.exports);