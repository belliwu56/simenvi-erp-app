const path = require('path');
// const ExtractTextPlugin = require("extract-text-webpack-plugin");
// let extractCSS = new ExtractTextPlugin("css/[name].css")

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
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                // use: extractCSS.extract(['css-loader']),
            },
        ]
    },
    // plugins: [extractCSS],
    // devtool: "source-map",
}
