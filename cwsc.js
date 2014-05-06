'use strict';

(function() {
  var converter = {};
  converter.toVertical = function(content, height) {

    var HEIGHT = height || 10;
    var len = content.length;
    var horizonLine = [];
    var pos = 0;
    var verticalLineBuffer = [];

    content = converter.convert(content, 'full');

    while (pos < len) {

      if (pos % HEIGHT === 0) {
        verticalLineBuffer = [];
        horizonLine.push(verticalLineBuffer);
      }

      verticalLineBuffer.push(content.charAt(pos));
      pos++;
    }

    var str = '';
    for (var index=0; index < HEIGHT; index++) {
      for (var i = horizonLine.length - 1; i >= 0; i--) {
        if (horizonLine[i][index]) {
          str += horizonLine[i][index];
        } else {
          str += '　';
        }
      }
      str += '\n';
    }

    return str;
  };

  converter.toHorizon = function(content) {
    var buffer = content.split('\n');
    var bufferLen = buffer.length;
    var maxHorizonSize = -1;
    for (var line = bufferLen - 1; line >= 0; line--) {
      if (maxHorizonSize < buffer[line].length) {
        maxHorizonSize = buffer[line].length;
      }
    }

    var str = '';
    for (var charPos = maxHorizonSize - 1; charPos >= 0; charPos--) {
      for (var line = 0; line < bufferLen; line++) {
        if( buffer[line][charPos] ) {
          str += buffer[line][charPos];
        }
      }
    }

    return str;
  };


  converter.convert = function(content, mode) {

    var transform = {
      full: function(code) {
        if (code >= 33 && code <= 126) {
          code += (65281-33);
        } else if (code === 32) { // space
          code = 12288;
        }

        return code;
      },
      half: function(code) {
        if (code >= 65281 && code <= 65374) {
          code = code - 65281 + 33;
        } else if (code === 12288) {
          code = 32;
        }

        return code;
      }
    };

    var str = '';
    var len = content.length;
    for (var i = 0; i < len; i++) {
      var code = transform[mode](content.charCodeAt(i));
      str += String.fromCharCode(code);
    }

    return str;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = converter;
  } else {
    window.converter = {
      toVertical: converter.toVertical,
      toHorizon: converter.toHorizon,
      convert: converter.convert
    };
  }

})();
