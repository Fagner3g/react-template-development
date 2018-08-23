const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
    devtool: 'source-map',
    entry: path.join(__dirname, 'src', 'index'),
    output: {
        path: path.join(__dirname, 'public'),
        filename: '[name]-[hash].js',
        publicPath: ''
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
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                include: /src/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    }
                ]
            },
            {
                test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name]-[hash].css'),
        new HtmlPlugin({
            title: 'Template Padrão',
            template: path.join(__dirname, 'src', 'html', 'template.html')
        })
    ]
};