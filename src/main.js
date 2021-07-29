// main.js 檔案是做 webpack 引入資源用 
// line 3 is imported for both configure style-loader and mini-css-extract-plugin
import "./css/all.css"

import fun from './js/module';

// 下面是對 webpack 測試用
console.log(' 載入 all.css and ./js/module.js 成功');

fun();
