if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      var reg = /\d/
      return reg.test(str);
    },

    containsRepeatingLetter : function(str) {
      var reg = /([a-zA-Z])\1+/
      return reg.test(str);
    },

    endsWithVowel : function(str) {
      var reg = /[aeiouAEIOU]$/
      return reg.test(str);
    },

    captureThreeNumbers : function(str) {
      var reg = /\d{3}/,
        match =  reg.exec(str);
      return match ? match[0] : false;
    },

    matchesPattern : function(str) {
      var reg = /^\d{3}-\d{3}-\d{4}$/;
      return reg.test(str);
    },
    isUSD : function(str) {
      // ^\$ - starts with $ sign
      // \d{1,3} - 1-3 digits
      // (,\d{3})* - comma + 3 digits 0 or more times
      // (\.\d{2})? - optionally match once a period plus 2 digits
      // $ - end matching
      var reg = /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/;
      return reg.test(str);
    }
  };
});
