if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function (start, end) {
      var t;
      // https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20%26%20closures/ch5.md#loops--closure
      for (var i = start; i <= end; i++) {
        (function(j) {
          t = setTimeout(function() {
            console.log(j);
          }, j * 100);
        })(i);
      }
      return {
        cancel: function () {
          clearInterval(t);
        }
      }
    }
  };
});
