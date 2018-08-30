const path = require('path')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const common = require('./common')

module.exports = {
    entry: common.entry,

    output: common.output,

    devServer: common.devServerConfig,

    plugins: [
        new ExtractTextPlugin('[name]-[hash].css'),

        new webpack.DefinePlugin({
            'precess.env': {
                'NODE_ENV': '"production'
            }
        }),

        new webpack.optimize.OccurrenceOrderPlugin(),

        new HtmlPlugin(common.htmlPluginConfig('template.html'))
    ],

    module: {
        rules: [
            common.jsLoader,
            Object.assign({}, common.cssLoader, {
                loaders: undefined,
                loader: ExtractTextPlugin.extract({ fallback: "style-loader", use: "css-loader" })
            }),
            common.fileLoader
        ]
    },

    resolve: common.resolve
}