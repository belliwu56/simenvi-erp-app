const path = require('path');

// 載入 extract-text-webpack-plugin (第一步)
const ExtractTextPlugin = require("extract-text-webpack-plugin");
let extractCSS = new ExtractTextPlugin("css/all.css")

// 載入 mini-css-extract-plugin (第一步)
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

if (process.env.NODE_ENV === "development")
    console.log(">>>><<<< process.env.NODE_ENV： ", process.env.NODE_ENV)

console.log(">>>><<<< src 絕對路徑: ", path.resolve(__dirname, 'src'))
console.log(">>>><<<< dist 絕對路徑： ", path.resolve(__dirname, 'dist'))

module.exports = {
    mode: process.env.NODE_ENV,
    context: path.resolve(__dirname, './src'),
    entry: { main: './main.js', },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },

    // module： 配置選項決定如何處理不同類型的模組
    //      rules： 創建模組時，匹配請求的規則數組
    //          test： 查找符合 Regex (正規表達式) 副檔名的模組，如符合即使用 use 內指定的 loader
    //          use： 定義需載入的 loader，可接受字串陣列或物件陣列傳遞。載入是由右到左依序作用
    // Loader 可以理解為模組和資源的轉換器， 它本身是一個 function，接受來源文件作為參數傳遞，最後返回其轉換後的結果。
    module: {
        rules: [
            // 利用了 style-loader 將 css-loader 處理過後的 CSS 注入到 HTML 內，
            // 將以 style 標籤的形式存在，但這有違一般開發的處理流程
            // ，建議還是將 CSS 檔案給獨立出來，
            // {
            //     test: /\.css$/,
            //     use: ['style-loader', 'css-loader'],
            // },
            {
                test: /\.css$/i,
                // 新增 loader (第三步)
                use: extractCSS.extract(['css-loader'])
            },
            // {
            //     test: /\.css$/i,
            //     // 新增 loader (第三步)
            //     use: [MiniCssExtractPlugin.loader, 'css-loader'],
            // },
        ]
    },
    // 創建實例 (第二步)
    // plugins: [new MiniCssExtractPlugin()],
    plugins: [extractCSS],
    devtool: "source-map",
}
