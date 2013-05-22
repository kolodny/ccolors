/*
Cli Colors
MIT license
Moshe Kolodny
https://github.com/kolodny/ccolors


based off of colors.js
https://github.com/marak/colors.js/
*/

exports.mode = "console";

//
// Prototypes the string object to have additional method calls that add terminal colors
//
var addProperty = function (color, func) {
  String.prototype.__defineGetter__(color, func);
};

var 
  colors = 'black red green yellow blue magenta cyan white'.split(' '),
  styles = {
    'bold'          : ['\x1B[1m',  '\x1B[22m'],
    'italic'        : ['\x1B[3m',  '\x1B[23m'],
    'underline'     : ['\x1B[4m',  '\x1B[24m'],
    'inverse'       : ['\x1B[7m',  '\x1B[27m'],
    'strikethrough' : ['\x1B[9m',  '\x1B[29m']
  };
colors.forEach(function(style, i) {
  styles[colors[i]] = ['\x1B[3' + i + 'm', '\x1B[39m'];
  styles[colors[i] + 'Bg'] = ['\x1B[4' + i + 'm', '\x1B[49m'];
    
  // High Intensity doesn't really work that well in all terminals; YMMV
  styles[colors[i] + 'Hi'] = ['\x1B[9' + i + 'm', '\x1B[49m'];
  styles[colors[i] + 'HiBg'] = ['\x1B[10' + i + 'm', '\x1B[49m'];
  styles[colors[i] + 'BgHi'] = ['\x1B[10' + i + 'm', '\x1B[49m'];
});

function stylize(str, style) {
  if (exports.mode === 'console') {
    return style[0] + str + style[1];
  } else if (exports.mode === 'none') {
    return str+'';
  } else {
    console.log('unsupported mode, try "browser", "console" or "none"');
  }
}

for (var i in styles) { (function(i) {
  if (styles.hasOwnProperty(i)) {
  addProperty(i, function () {
    return stylize(this, styles[i]);
    });
  }
})(i);}

function sequencer(map) {
  return function () {
    var exploded = this.split(""), i = 0;
    exploded = exploded.map(map);
    return exploded.join("");
  };
}

var rainbowMap = (function () {
  var rainbowColors = ['red', 'yellow', 'green', 'blue', 'magenta']; //RoY G BiV
  return function (letter, i, exploded) {
    if (letter === " ") {
      return letter;
    } else {
      return stylize(letter, rainbowColors[i++ % rainbowColors.length]);
    }
  };
})();

function addSequencer(name, map) {
  addProperty(name, sequencer(map));
};

addSequencer('rainbow', rainbowMap);
addSequencer('zebra', function (letter, i, exploded) {
  return i % 2 === 0 ? letter : letter.inverse;
});


addProperty('stripColors', function () {
  return ("" + this).replace(/\x1B\[\d+m/g, '');
});

