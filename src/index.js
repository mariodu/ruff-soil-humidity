'use strict';

var driver = require('ruff-driver');
// var gpio = require('gpio');
var MAX_VOLTAGE = 5; // 最高输入 5v

module.exports = driver({

  attach: function(inputs, context) {
    var self = this;
    // this._gpioIn = inputs['gpio-in'];
    this._adc = inputs['adc'];

    // this._gpioIn.on('interrupt', function(value) {
    //   self.emit('change', value);
    // });
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