if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
      return (number >> bit) & 1;
    },

    base10: function(str) {
      return parseInt(str, 2);
    },

    convertToBinary: function(num) {
      var result = (+num).toString(2);
      return binaryTo8Bit(result);

      function binaryTo8Bit(binary) {
        while (binary.length < 8) {
          binary = '0' + binary;
        }
        return binary;
      }
    },

    multiply: function(a, b) {
      // example: a = 0.012, b = 0.03

      // compare the 2 numbers and determine the one with higher number of decimal places
      // ex: 0.012 has 3 decimal places while 0.03 has 2 decimal places so we use the number 3
      var higherDecPlaces = Math.max(getDecimalPlaces(a), getDecimalPlaces(b));

      // move the decimal place all the way to the right, leaving no decimals before multiplying
      // ex: 0.012 * 0.03 ==> ( (0.012 * 10^3) * (0.03 * 10^3) ) / (10^6)
      return ( (a * Math.pow(10, higherDecPlaces)) * (b * Math.pow(10, higherDecPlaces)) ) / Math.pow(10, higherDecPlaces * 2);

      function getDecimalPlaces(num) {
        var decimals = num.toString().split('.')[1];
        return decimals ? decimals.length : 0;
      }
    }
  };
});

