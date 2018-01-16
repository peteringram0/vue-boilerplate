const webpack = require('webpack');
const path = require('path');
const _ = require('lodash');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

// Assign in the mode
let mode = process.env.NODE_ENV;

if(mode === undefined)
    mode = 'testing';

function packageSort(packages) {
    return function sort(left, right) {
        var leftIndex = packages.indexOf(left.names[0]);
        var rightindex = packages.indexOf(right.names[0]);

        if (leftIndex < 0 || rightindex < 0) {
            throw "unknown package";
        }

        if (leftIndex > rightindex) {
            return 1;
        }

        return -1;
    }
};

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

// Load in the config file
let config = require(resolve('config') + '/config.' + mode + '.js');

/**
 * Module
 */
module.exports = {
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    entry: {
        app: './src/app.js',
        vendor: ['vue', 'vue-router', 'axios']
    },
    output: {
        path: resolve('public'),
        filename: ((mode === 'production') ? '[name].[chunkhash].js' : '[name].js'),
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0']
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                options: {
                    postcss: [
                        autoprefixer({
                            cascade: false,
                            browsers: ['> 0%']
                        })
                    ],
                    loaders: ((mode === 'testing' || mode === 'develop') ?
                        ['css-loader', 'stylus-loader'] :
                        { stylus: ExtractTextPlugin.extract(['css-loader', 'stylus-loader']) })
                },
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
            }
        ]
    },
    plugins: [

        /**
         * Put vue into prod mode
         */
        new webpack.DefinePlugin({
            'process.env': _.merge(config, {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            })
        }),

        /**
         * Clean out public dir
         */
        new CleanWebpackPlugin(['public'], {
            root: resolve('/'),
            exclude:  ['stats.json'],
            verbose: true,
            dry: false
        }),

        /**
         * Move all assets
         */
        new CopyWebpackPlugin([{
            from: resolve('src/assets'),
            to: resolve('public/assets')
        }]),

        /**
         * Extract all of the stylus out into this CSS file
         */
        new ExtractTextPlugin(((process.env.NODE_ENV === 'production') ? '[name].[chunkhash].css' : '[name].css')),

        /**
         * Inject files into HTML
         */
        new HtmlWebpackPlugin({
            filename: resolve('public/index.html'),
            template: resolve('src/index.ejs'),
            chunksSortMode: packageSort(['vendor', 'app'])
        })

    ],
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        disableHostCheck: true
    },
};

/**
 * NON Producton mode
 */
if (process.env.NODE_ENV !== 'production') {

    // Add source maps
    module.exports.devtool = 'source-map';

}

/**
 * Production mode
 */
if (process.env.NODE_ENV === 'production') {

    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            mangle: true,
            compress: {
                warnings: false, // Suppress uglification warnings
                pure_getters: true,
                unsafe: true,
                unsafe_comps: true,
                screw_ie8: true
            },
            output: {
                comments: false,
            },
            exclude: [/\.min\.js$/gi] // skip pre-minified libs
        }),
        new OptimizeCssAssetsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function (module) {
                return module.context && module.context.indexOf('node_modules') !== -1;
            },
            filename: 'vendor-[chunkhash].js'
        })
    );

    // Use prod version of vue
    module.exports.resolve.alias.vue$ = 'vue/dist/vue.min';

}

/**
 * Production mode
 */
if (process.env.NODE_ENV === 'testing') {

    // Use prod version of vue
    module.exports.resolve.alias.vue$ = 'vue/dist/vue.min';

}
