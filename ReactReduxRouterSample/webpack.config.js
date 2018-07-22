

var webpack = require("webpack");
var path = require("path");

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:8080', // WebpackDevServer host and port 
        'webpack/hot/dev-server', // "only" prevents reload on syntax errors
        './src/index.js',
    ],
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: ["babel-loader"],
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loaders: ["css-loader"],
            }
        ]
    },
    mode: 'development',
    plugins: [ 
        new webpack.HotModuleReplacementPlugin() 
    ],
    devServer: {
        hot: true,
        contentBase: '/'
    },
    devtool: 'inline-source-map'
};