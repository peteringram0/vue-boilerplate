const webpack = require('webpack');
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

// Assign in the mode
let mode = process.env.NODE_ENV;

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

/**
 * Module
 */
module.exports = {
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
	entry: {
		app: './src/app.js',
		vendor: ['vue', 'vue-router', 'axios']
	},
	output: {
		path: path.join(__dirname, '/public'),
		filename: ((mode === 'production') ? '[name].[chunkhash].js' : '[name].js'),
		publicPath: '/'
	},
	module: {
		rules: [{
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
					loaders: {
						stylus: ExtractTextPlugin.extract(['css-loader', 'stylus-loader'])
					}
				},
			}
		]
	},
	plugins: [

		/**
		 * Clean out public dir
		 */
		new CleanWebpackPlugin(['public'], {
			root: __dirname,
			verbose: true,
			dry: false
		}),

		/**
		 * Move all assets
		 */
		new CopyWebpackPlugin([{
			from: __dirname + '/src/assets',
			to: __dirname + '/public/assets'
		}]),

		/**
		 * Extract all of the stylus out into this CSS file
		 */
		new ExtractTextPlugin(((process.env.NODE_ENV === 'production') ? '[name].[chunkhash].css' : '[name].css')),

		/**
		 * Inject files into HTML
		 */
		new HtmlWebpackPlugin({
			filename: __dirname + '/public/index.html',
			template: __dirname + '/src/index.ejs',
            chunksSortMode: packageSort(['vendor', 'app'])
		})

	],
	devServer: {
		contentBase: ('./public'),
		historyApiFallback: true
	},
};

/**
 * NON Producton mode
 */
if (process.env.NODE_ENV !== 'production') {

    // Add source maps
	module.exports.devtool = 'source-map'

}

/**
 * Production mode
 */
if (process.env.NODE_ENV === 'production') {

    module.exports.plugins.push(
		new UglifyJSPlugin(),
		new OptimizeCssAssetsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
        	name: 'vendor',
        	minChunks: Infinity,
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
