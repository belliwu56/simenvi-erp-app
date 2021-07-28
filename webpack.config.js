const path = require('path');
// const MiniCssExtractPlugin = require("mini-css-extract-plugin")

if (process.env.NODE_ENV === "development")
    console.log("process.env.NODE_ENV： ", process.env.NODE_ENV)

module.exports = {
    mode: process.env.NODE_ENV,
    context: path.resolve(__dirname, './src'),
    entry: {
        index: './index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                //     test: /\.css$/i,
                //     use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ]
    },
    // plugins: [new MiniCssExtractPlugin()],
}
