const path = require('path');

if (process.env.NODE_ENV === "development")
    console.log(">>>><<<< process.env.NODE_ENV： ", process.env.NODE_ENV);

console.log(">>>><<<< src 絕對路徑: ", path.resolve(__dirname, 'src'));
console.log(">>>><<<< dist 絕對路徑： ", path.resolve(__dirname, 'dist'));

module.exports = {
    entry: "./src/main.js",
    output: {
        path: path.resolve(__dirname, './dist'), //Convert absolute path
        filename: 'bundle.js'
    },
    // devServer: {
    //     contentBase: path.resolve(__dirname, './dist'),
    //     index: 'index.html',
    //     port: 8888,
    //     open: true,
    //     hot: true,
    //     writeToDisk: true
    // },
};
