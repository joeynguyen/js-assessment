if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var filesArr = [];
      var dirsMatch = false;
      dirName = dirName || data.dir;

      checkDirs(data, dirName);
      return filesArr;

      function checkDirs(obj, targetDir) {
        if (obj.dir === targetDir) {
          dirsMatch = true;
          getFileNames(obj);
        }

        // recursively check if directory matches directory name requested
        for (var i = 0; i < obj.files.length; i++) {
          if (dirsMatch) {
            return; // stop loop
          }
          else if (typeof obj.files[i] === "object") {
            console.log('i', obj.files[i]);
            checkDirs(obj.files[i], targetDir);
          }
        }
      }

      // recursively find files inside directory
      function getFileNames(obj) {
        for (var i = 0; i < obj.files.length; i++) {
          if (typeof obj.files[i] === "string") {
            filesArr.push(obj.files[i]);
          } else {
            getFileNames(obj.files[i]);
          }
        }
      }
    },

    permute: function(arr) {
      // https://stackoverflow.com/a/9960925
      var permArr = [],
        usedChars = [];

      doPermute(arr);

      return permArr;

      function doPermute(input) {
        var i, ch;
        for (i = 0; i < input.length; i++) {
          ch = input.splice(i, 1)[0];
          usedChars.push(ch);
          if (input.length == 0) {
            permArr.push(usedChars.slice());
          }
          doPermute(input);
          input.splice(i, 0, ch);
          usedChars.pop();
        }
      }
    }
  };
});
