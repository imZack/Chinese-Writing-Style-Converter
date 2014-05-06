Chinese-Writing-Style-Converter
===============================

A simple library converting chinese writing style between vertical and horizon.

簡易中文直書橫書轉換
====================

使用方法
--------

### In Node.js (NPM)

https://www.npmjs.org/package/chinese-writing-style-converter

`npm install chinese-writing-style-converter` OR

`npm install git@github.com:imZack/Chinese-Writing-Style-Converter.git`

```js
var converter = require('cwsc');
var verticalText = converter.toVertical(inputText);    // 轉直書
var horizonText = converter.toHorizon(verticalText);   // 轉橫書
var halfwidth = converter.convert(fullwidth, 'half');  // 轉全形
var fullwidth = converter.convert(halfwidth, 'full');  // 轉半形
```

### In Browser

```js
<script src="https://raw.githubusercontent.com/imZack/Chinese-Writing-Style-Converter/master/cwsc.js"></script>
var verticalText = converter.toVertical(inputText);    // 轉直書
var horizonText = converter.toHorizon(verticalText);   // 轉橫書
var halfwidth = converter.convert(fullwidth, 'half');  // 轉全形
var fullwidth = converter.convert(halfwidth, 'full');  // 轉半形
```

### API

#####`.toVertical(String inputText[, integer height])` -> `String`
#####`.toHorizon(String handler)` -> `String`
#####`.convert(String handler, 'full' | 'half')` -> `String`

### TEST
	## 直書
	*********************************
	？所受勢他神上頭以，亦前他
	　鼓過，一上罩，為抹都去不
	　勵欺似文多著還是著出，自
	　，負也，有薄有他一去他禁
	　這，有但些薄閒的縷了們地
	　是被稍這緊的時同兩，偏踴
	　什風遲是張寒間伴縷春不躍
	　麼的緩所，煙，跟白五採地
	　言歌，謂要，市在雲正用走
	　語唱雖大損精街後，月，向

	## 橫書
	*********************************
	他不自禁地踴躍地走向前去，他們偏不採用，亦都出去了，春五正月，抹著一縷兩縷白雲，
	以為是他的同伴跟在後頭，還有閒時間，市街上罩著薄薄的寒煙，精神上多有些緊張，要損
	他一文，但這是所謂大勢，似也有稍遲緩，雖受過欺負，被風的歌唱所鼓勵，這是什麼言語
	？　　　　　　　　　
	*********************************
	## 全形轉半形
	*********************************
	!"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnop
	qrstuvwxyz{|}~
	## 半形轉全形
	*********************************
	！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨ
	ＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐ
	ｑｒｓｔｕｖｗｘｙｚ｛｜｝～　
	*********************************

### TODO

1. 運用 NLP 來判斷直書橫書
2. etc...
