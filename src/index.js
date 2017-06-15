'use strict';

var driver = require('ruff-driver');
var MAX_VOLTAGE = 5; // 最高输入 5v

module.exports = driver({

  attach: function(inputs, context) {
    this._adc = inputs['adc'];
  },

  exports: {
    getSoilHumidity: function(callback) {
      this._adc.getVoltage(function(error, voltage) {
        if (error) {
          callback(error);
          return;
        }

        callback(undefined, (voltage / MAX_VOLTAGE).toFixed(3) - 0);
      });
    }
  }
});