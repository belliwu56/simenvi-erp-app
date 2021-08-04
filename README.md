# simenvi-erp-app
**Description : The project develops and build ERP for SimEnvi Comapany.**

# 專案建置步驟 :

## 1. 下載及安裝 node.js 套件
- Download url: https://nodejs.org/zh-tw/download/ 
- 確定 node.js 安裝成功： node -v, npm -v 

## 2. 建立專案開發目錄
`啟動 window 10 command line 視窗`
- mkdir simenvi-erp-app
- cd simenvi-erp-app

## 3. 建立 Git 版本控管
- 登入 github : https://github.com/ 新增 repository 
- echo "# simenvi-erp-app" >> README.md
- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin https://github.com/belliwu56/simenvi-erp-app.git
- git push -u origin main

## 4. 利用 node.js 及 npm 管理專案
- npm init -y
- 編輯 package.json

## 5. Webpack 基本配置
`安裝專案管理套件 (也稱腳手架) webpack 5.x`
- npm install --save-dev webpack webpack-cli
- npm install --save-dev webpack-dev-server
- 新增 webpack.config.js 配置檔

## 6. 初始專案結構：
```
simenvi-erp-app/
│
├─── dist/                # Webpack output
│
├─── node_modules/        # 專案相依套件
│
├─── src/                 # 專案源碼目錄 
│   │
│   modules/              # 專案各項元件或模組
│   │
│   ├─── main.css         # css 入口檔案
│   ├─── main.js          # entry 入口檔案
│   └─── index.html  
│
├─── webpack.config.js    # Webpack 配置檔案
├─── package-lock.json
└─── package.json         # 已安裝 webpack、webpack-cli
``` 
## 7. 安裝及設定 Webpack 5 其他相關套件
### (7.1) 
`用途： 建立內建伺服器`
- npm install --save-dev webpack-dev-server
```
基本設定:
1. In webpackconfing.js
devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    index: 'index.html',
    port: 9000,
    writeToDisk: true
},

2. In package.json
"scripts": {
    "start": "webpack serve --mode development",
},
```
### (7.2) html-webpack-plugin
`用途： 將目錄 src/ 下 所有 html檔 ，經 build 後會輸出到目錄 /dist 下`
- npm install --save-dev html-webpack-plugin

### (7.3) cross-env (可選)
`用途： 導入 package.json 進入 webpack/config.js 環境變數`
- npm install --save-dev cross-env

### (7.4) css-loader and style-loader （可選）
`用途： 處理專案 css`
- npm install --save-dev css-loader

`用途： 利用 style-loader 將 css file plugin html by <style> tag` 
- npm install --save-dev style-loader

### (7.5) mini-css-extract-plugin （目前用法）
`用途： 將 css 與 js 獨立引用 by <link> 標籤`
- npm install --save-dev mini-css-extract-plugin

```
編輯 webpack.config.js 設定檔說明  
  a. cross-env --> 用於 window 環境下，能識別其環境變數，但 MAC 就不用安裝
  b. style-lader、css-loader --> 兩者一起搭用
  c. mini-css-extract-plugin^0.9.0
  上述 b 和 c 二選一
``` 

### (7.6) sass-loader and node-sass
`用途： 處理專案 scss`
- npm install --save-dev sass-loader node-sass

## 8. 安裝 JavaScript 的編譯器 Babel
```
說明：
由於瀏覽器的支援度卻跟不上 JavaScript 版本的更新，所以新版本的 JavaScript 在現有的瀏覽器上面支援度很低，目前市面上支援度最高的版是 ECMAScript 5（ES5）了，為了可以使用新版本的 JavaScript 做開發，又要瀏覽器可以支援，需要有相對應的工具作轉換，把新版本的 JavaScript 轉換成 ES5 。
Webpack 本身並沒有提供把新版本的 JavaScript 轉換成 ES5 的功能，所以需要靠神奇的轉換工具 Babel。
```
- npm install --save-dev babel-loader @babel/core @babel/preset-env

## 9. CSS Framework Bootstrap 5 安裝及設定
- npm install --save bootstrap

## 10. Fontawesome Icons 安裝及設定 
- npm install --save @fortawesome/fontawesome-free
 
