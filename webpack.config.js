const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

if (process.env.NODE_ENV === "development")
    console.log(">>>><<<< process.env.NODE_ENV： ", process.env.NODE_ENV);

console.log(">>>><<<< src 絕對路徑 : ", path.resolve(__dirname, 'src'));
console.log(">>>><<<< dist 絕對路徑 ： ", path.resolve(__dirname, 'dist'));

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, './dist'), //Convert absolute path
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 8888,
        open: true,
        hot: true,
        writeToDisk: true
    },
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
    plugins: [
        new HtmlWebpackPlugin({
            // 不加入下列 template key，預設是會用 HtmlWebpackPlugin 的 html
            template: "./src/index.html"
        }),
        new CleanWebpackPlugin()
    ]
};
