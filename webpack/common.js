const { join } = require('path')

const paths = {
    root: join(__dirname, '..'),
    src: join(__dirname, '..', 'src'),
    public: join(__dirname, '..', 'public'),
    modules: join(__dirname, '..', 'node_modules')
}

module.exports = {
    paths,
    entry: join(paths.src, 'index'),

    output: {
        path: paths.public,
        filename: '[name]-[hash].js'
    },

    devServerConfig: {
        port: 8080,
        contentBase: './public',
        hot: true
    },

    htmlPluginConfig: (template) => ({
        title: 'Template Padrão',
        template: join(paths.src, 'html', template)
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
        loaders: ['style-loader', 'css-loader']
    },

    fileLoader: {
        test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
        loader: 'file-loader'
    },

    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            src: paths.src,
            components: join(paths.src, 'components'),
            reducers: join(paths.src, 'redux-flow', 'reducers')
        }
    }
}