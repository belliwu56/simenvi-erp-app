# simenvi-erp-app
> The project will build Resource Management System of Simenvi Corporation  .

## 專案建置步驟 :
``` bash
# 1. 下載及安裝 node.js 套件
> Download url: https://nodejs.org/zh-tw/download/ 

> 確定 node.js 安裝成功： node -v, npm -v 
``` 
``` bash
# 2. 建立專案開發環境
> 啟動 window 10 command 視窗

mkdir simenvi-erp-app

cd simenvi-erp-app
``` 

``` bash
# 3. 建立版本控管 in github
echo "# simenvi-erp-app" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/belliwu56/simenvi-erp-app.git
git push -u origin main
``` 

``` bash
# 4. 建立專案開發環境

npm init -y

> 編輯 package.json
``` 

``` bash
## Webpack 基本配置
# 5. 安裝專案管理套件 (也稱腳手架) webpack 4.x
npm install --save-dev webpack@^4.42.1 webpack-cli@^3.3.11

npm install --save-dev webpack-dev-server

> 新增 webpack.config.js 設定檔
``` 

``` bash
# 6. 初始專案結構：
simenvi-erp-app/
│
├─── dist/                # Webpack output
│
├─── node_modules/        # 專案相依套件
│
├─── src/                 # 專案源碼目錄 
│   │
│   css/
│   │
│   └─── style.js         # css 入口檔案
│   │
│   js/
│   └─── main.js          # entry 入口檔案
│
├─── webpack.config.js    # Webpack 配置檔案
├─── package-lock.json
└─── package.json         # 已安裝 webpack、webpack-cli
``` 

``` bash
# 7. 安裝及設定與 webpack5 其他相關套件
npm install --save-dev cross-env

npm install --save-dev css-loader@^3.4.2

npm install --save-dev style-loader@^1.1.3

npm install --save-dev extract-text-webpack-plugin@next (support webpack 4.x, Not 3.x)


> 編輯 webpack.config.js 設定檔 
for 
  a. cross-env   用於 window 環境下，能識別其環境變數，但 MAC 就不用安裝
  b. css-loader
  c. 
``` 

``` bash
# 8. 安裝 JavaScript 的編譯器 Babel
> 由於瀏覽器的支援度卻跟不上 JavaScript 版本的更新，所以新版本的JavaScript在現有的瀏覽器上面支援度很低，目前市面上支援度最高的版本大概就是 ECMAScript 5（ES5）了，為了要讓工程師可以使用新版本的JavaScript 做開發又要瀏覽器可以支援，我們就需要有相對應的工具作轉換，把新版本的 JavaScript 轉換成 ES5 。webpack 本身並沒有提供把新版本的 JavaScript 轉換成 ES5 的功能，所以需要靠神奇的轉換工具Babel~～～～～
Babel 是一款 JavaScript 的編譯器，事實上 JavaScript 從發行到現在，經過了許多版本的更新，常見的 ES6、ES7 都屬於較新的版本，最為穩定的版本為 ES5，兼容性也是最高的， Babel 的用意就是將較新版本的  JavaScript 編譯成穩定版本，以提高兼容性。

npm install --save-dev babel-loader @babel/core @babel/preset-env
``` 

``` bash
# . 安裝及設定 CSS framework Bootstrap 5
npm install --save bootstrap

# 6. 安裝及設定 Font Icon 
npm install --save @fortawesome/fontawesome-free
``` 
