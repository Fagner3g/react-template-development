const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: './app.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public',
        hot: true
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules/'
        }
    },
    module: {
        rules: [
            {
                test: /\.js[x]$/,
                exclude: /node_modules/,
                include: /src/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                })
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                loaders: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin("app.css"),
        new webpack.HotModuleReplacementPlugin()
    ]
};