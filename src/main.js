// main.js 檔案是做 webpack 引入資源用
import "./css/all.css"
import fun from './js/module';

// 下面是對 webpack 測試用
const myName = 'belliwu';
console.log('Hello ' + myName);

fun();
