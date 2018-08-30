const path = require('path')

module.exports = {
    entry: path.join(__dirname, '..', 'src', 'index'),

    output: {
        path: path.join(__dirname, '..', 'public'),
        filename: '[name]-[hash].js'
    },

    devServerConfig: {
        port: 8080,
        contentBase: './public',
        hot: true
    },

    htmlPluginConfig: (template) => ({
        title: 'Template Padrão',
        template: path.join(__dirname, '..', 'src', 'html', template)
    }),

    jsLoader: {
        test: /\.js[x]$/,
        exclude: /node_modules/,
        include: /src/,
        loader: 'babel-loader'
    },

    cssLoader: {
        test: /\.css$/,
        exclude: /node_modules/,
        include: /src/,
        loaders: [
            'style-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: true,
                }
            }
        ]
    },

    fileLoader: {
        test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        loader: 'file-loader'
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            src: path.join(__dirname, '..', 'src'),
            components: path.join(__dirname, '..', 'src', 'components')
        }
    }
}