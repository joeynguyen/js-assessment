if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
      var dfrObj = $.Deferred();
      setTimeout(function() {
        dfrObj.resolve(value);
      }, 100);
      return dfrObj.promise();
    },

    manipulateRemoteData : function(url) {
      var dfrObj = $.Deferred();
      $.ajax({
        url: url,
        dataType: 'json',
        success: function(response) {
          var names = response.people.map(function(item) {
            return item.name;
          });
          dfrObj.resolve(names.sort());
        }
      });
      return dfrObj.promise();
    }
  };
});
