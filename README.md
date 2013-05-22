# ccolors - get color and style in your node.js console


## Installation

    npm install ccolors

## colors and styles!

- bold
- italic
- underline
- inverse

- black
- red
- green
- yellow
- blue
- magenta
- cyan
- white

- blackBg
- redBg
- greenBg
- yellowBg
- blueBg
- magentaBg
- cyanBg
- whiteBg

- blackHi
- redHi
- greenHi
- yellowHi
- blueHi
- magentaHi
- cyanHi
- whiteHi

- blackBgHi
- redBgHi
- greenBgHi
- yellowBgHi
- blueBgHi
- magentaBgHi
- cyanBgHi
- whiteBgHi
- blackHiBg
- redHiBg
- greenHiBg
- yellowHiBg
- blueHiBg
- magentaHiBg
- cyanHiBg
- whiteHiBg

- rainbow
- zebra

## Usage

``` js
var ccolors = require('ccolors');

console.log('hello'.green); // outputs green text
console.log('i like cake and pies'.underline.red) // outputs red underlined text
console.log('inverse the color'.inverse); // inverses the color
console.log('OMG Rainbows!'.rainbow); // rainbow (ignores spaces)
```

Shamelessly copied from https://github.com/marak/colors.js/