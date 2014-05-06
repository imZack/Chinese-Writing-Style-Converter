'use strict';

var converter = require('./cwsc');

var inputText = '他不自禁地踴躍地走向前去，他們偏不採用，亦都出去了，春五正月，抹著一縷兩縷白雲，以為是他的同伴跟在後頭，還有閒時間，市街上罩著薄薄的寒煙，精神上多有些緊張，要損他一文，但這是所謂大勢，似也有稍遲緩，雖受過欺負，被風的歌唱所鼓勵，這是什麼言語？';

var verticalText = converter.toVertical(inputText);
var horizonText = converter.toHorizon(verticalText);

console.log('## 直書\n*********************************');
console.log(verticalText);
console.log('## 橫書\n*********************************');
console.log(horizonText);
console.log('*********************************');



var fullwidth = '！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～　';

var halfwidth = converter.convert(fullwidth, 'half');
var fullwidth = converter.convert(halfwidth, 'full');

console.log('## 全形轉半形\n*********************************');
console.log(halfwidth);
console.log('## 半形轉全形\n*********************************');
console.log(fullwidth);
console.log('*********************************');
