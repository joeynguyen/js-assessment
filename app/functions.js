if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn(arr[0], arr[1], arr[2]);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return function(newStr) {
        return str + ', ' + newStr;
      };
    },

    makeClosures : function(arr, fn) {
      return arr.map(function(item, i, thisArr) {
        return function() {
          return fn(thisArr[i]);
        }
      });
    },

    partial : function(fn, str1, str2) {
      return function(punctuation) {
        return fn(str1, str2, punctuation);
      }
    },

    useArguments : function() {
      var storedArgs = Array.prototype.slice.call(arguments);

      return storedArgs.reduce(function(a, b) {
        return a + b;
      }, 0);
    },

    callIt : function(fn) {
      var storedArgs = Array.prototype.slice.call(arguments, 1);
      return fn.apply(null, storedArgs);
    },

    partialUsingArguments : function(fn) {
      var storedArgs = Array.prototype.slice.call(arguments, 1);

      return function () {
        var new_args = Array.prototype.slice.call(arguments),
          args = storedArgs.concat(new_args);

        return fn.apply(null, args);
      };
    },

    curryIt : function(fn) {
      var requiredArgsLength = fn.length;

      return getRequiredArgs([], requiredArgsLength);

      function runWithArgs(_fn, args) {
        return fn.apply(_fn, args);
      };

      function getRequiredArgs(currentArgs, requiredArgsNum) {
        // if we have required number of arguments, run the function
        if (currentArgs.length === requiredArgsNum) {
          return runWithArgs(fn, currentArgs);
        }
        // otherwise, keep looking
        return function(arg) {
          var newArgs = currentArgs.concat(arg);
          return getRequiredArgs(newArgs, requiredArgsNum);
        }
      }
    }
  };
});
