if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
      return arr.indexOf(item);
    },

    sum : function(arr) {
      return arr.reduce(function(a, b) {
        return a + b;
      }, 0);
    },

    remove : function(arr, item) {
      return arr.filter(function(val) {
        return val !== item;
      });
    },

    removeWithoutCopy : function(arr, item) {
      function func(myArr, myItem) {
        var itemIndex = myArr.indexOf(myItem);
        if (itemIndex > -1) {
          myArr.splice(itemIndex, 1)
          func(myArr, myItem);
        }
      }

      func(arr, item);
      return arr;
    },

    append : function(arr, item) {
      return arr.concat(item);
    },

    truncate : function(arr) {
      return arr.slice(arr, arr.length - 1);
    },

    prepend : function(arr, item) {
      return [item].concat(arr);
    },

    curtail : function(arr) {
      return arr.slice(1);
    },

    concat : function(arr1, arr2) {
      return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
      return []
        .concat(arr.slice(0, index))
        .concat(item)
        .concat(arr.slice(index))
      ;
    },

    count : function(arr, item) {
      return arr
        .filter(function(x) {
          return x === item;
        })
        .length
      ;
    },

    duplicates : function(arr) {
      var uniquesArr = [],
        dupesArr = [];

      for (i = 0; i < arr.length; i++) {
        // if current item doesn't exist in unique items array, add it to uniquesArr
        if (uniquesArr.indexOf(arr[i]) === -1) {
          uniquesArr.push(arr[i]);
        }
        // else if current item does exist in unique items array but doesn't exist in duplicate items array, add it to dupesArr
        else if (dupesArr.indexOf(arr[i]) === -1) {
          dupesArr.push(arr[i]);
        }
      }

      return dupesArr;
    },

    square : function(arr) {
      return arr.map(function(x) {
        return x * x;
      });
    },

    findAllOccurrences : function(arr, target) {
      var allOccurrences = [];
      arr.forEach(function(x, i) {
        if (x === target) {
          allOccurrences.push(i);
        }
      });

      return allOccurrences;
    }
  };
});
