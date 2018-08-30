const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')

const common = require('./common')

module.exports = {
    devtool: 'source-map',

    entry: common.entry,

    output: Object.assign({}, common.output, {
        publicPath: ''
    }),

    devServer: common.devServerConfig,

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlPlugin(common.htmlPluginConfig('template.html'))
    ],

    module: {
        rules: [
            common.jsLoader,
            common.cssLoader,
            common.fileLoader
        ]
    },

    resolve: common.resolve
}