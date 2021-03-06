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
│   ├─── main.js          # Webpack entry 入口檔案
│   └─── index.html       # SPA 網站首頁
│
├─── webpack.config.js    # Webpack 配置檔案
├─── package-lock.json
└─── package.json         # 已安裝 webpack、webpack-cli
``` 
## 7. 安裝及設定 Webpack 5 其他相關套件

A. webpack-dev-server
- npm install --save-dev webpack-dev-server
- 用途： 建立內建伺服器
```
基本設定:
1. In webpackconfing.js
devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    index: 'index.html',
    port: 8080,
    writeToDisk: true
},

2. In package.json
"scripts": {
    "start": "webpack serve --mode development",
},
```

B. html-webpack-plugin
- npm install --save-dev html-webpack-plugin 
- 用途： 將目錄 src/ 下 所有 html 檔 ，經 build 後會輸出到目錄 /dist 下
```
基本設定:
1. In webpackconfing.js
const HtmlWebpackPlugin = require("html-webpack-plugin");

plugins: [
        new HtmlWebpackPlugin({
            // 不加入下列 template key，預設是會用 HtmlWebpackPlugin 的 html
            template: "./src/index.html"
        })
]
```

C. cross-env (可選)
- npm install --save-dev cross-env 
- 用途： 導入 package.json 進入 webpack/config.js 環境變數

D. css-loader （可選）
- npm install --save-dev css-loader 
- 用途： 處理專案 css 

E. style-loader （可選）
- npm install --save-dev style-loader 
- 用途： 利用 style-loader 將 css 檔案內嵌於 html 

F. sass-loader and node-sass
- npm install --save-dev sass-loader node-sass 
- 用途： 處理專案 scss 
```
基本設定:
1. In webpackconfing.js
module: {
  rules: [
      {
          test: /\.txt/,
          type: "asset/source"
      },
      {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader']
      },
      {
          test: /\.s[ac]ss$/i,
          use: ['style-loader', 'css-loader', 'sass-loader']
      },
  ]
},
```

G. mini-css-extract-plugin （可選）
- npm install --save-dev mini-css-extract-plugin 
- 用途： 將 css 與 js 獨立引用 by link 標籤
```
基本設定: ???
```

H. 安裝 JavaScript 的編譯器 Babel 
- npm install --save-dev babel-loader @babel/core @babel/preset-env 
- 用途：
由於瀏覽器的支援度卻跟不上 JavaScript 版本的更新，所以新版本的 JavaScript 在現有的瀏覽器上面支援度很低， 
目前市面上支援度最高的版是 ECMAScript 5（ES5）了，為了可以使用新版本的 JavaScript 做開發，又要瀏覽器可以支援， 
需要有相對應的工具作轉換，把新版本的 JavaScript 轉換成 ES5。 
Webpack 本身並沒有提供把新版本的 JavaScript 轉換成 ES5 的功能，所以需要靠神奇的轉換工具 Babel。
```
基本設定: ???
```

I. 安裝 clean-webpack-plugin 
- npm install --save-dev clean-webpack-plugin 
- 用途： 處理 /dist目錄下所有 gabage 
```
基本設定: ???
```

## 8. CSS Framework Bootstrap 5 安裝及設定 
- npm install --save @popperjs/core 
- npm install --save bootstrap 
```
基本設定: 
1. in main.js 加入下面敘述
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
```

## 9. Fontawesome Icons 安裝及設定  
- npm install --save @fortawesome/fontawesome-free 
```
基本設定: ???
```
