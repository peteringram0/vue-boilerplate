const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

const webpackConfig = {
    entry: {
        app: './src/main.js'
    },
    output: {
        path: path.resolve(__dirname, '../public'),
        filename: '[name].js',
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            // 'vue$': 'vue/dist/vue.min',
            '@': resolve('src')
        }
    },
    module: {
        rules: [
            {
                test: /\.styl$/,
                use: ['vue-style-loader',
                    { loader: 'css-loader', options: { minimize: false, sourceMap: undefined } },
                    { loader: 'stylus-loader', options: { sourceMap: undefined } },
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {
                        stylus: ExtractTextPlugin.extract(['css-loader', 'stylus-loader']),
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
            }
        ]
    },
    devtool: '#inline-source-map',
    plugins: [
        new ExtractTextPlugin('[name].css'),
    ]
};

delete webpackConfig.entry;
module.exports = webpackConfig;
