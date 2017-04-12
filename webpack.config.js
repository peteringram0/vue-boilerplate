const webpack = require('webpack');
const path = require('path');
const glob = require('glob');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

// Production flat
var inProduction = (process.env.NODE_ENV === 'production');

/**
 * Module
 */
module.exports = {
	entry: {
		app: './src/app.js',
		vendor: ['vue/dist/vue.js', 'vue-router', 'axios', 'buefy'] // lodash
	},
	output: {
		path: path.join(__dirname, '/dist'),
		filename: ((inProduction) ? '[name].[chunkhash].js' : '[name].js'),
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
						stylus: ExtractTextPlugin.extract({
							loader: ['css-loader', 'stylus-loader'],
							fallbackLoader: 'vue-style-loader'
						})
					}
				},
			}
		]
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.js'
		}
	},
	plugins: [

		/**
		 * Chunk
		 */
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity,
			filename: ((inProduction) ? 'vendor-[chunkhash].js' : 'vendor.js'),
		}),

		/**
		 * Clean out Dist dir
		 */
		new CleanWebpackPlugin(['dist'], {
			root: __dirname,
			verbose: true,
			dry: false
		}),

		/**
		 * Move all assets
		 */
		new CopyWebpackPlugin([{
			from: __dirname + '/src/assets',
			to: __dirname + '/dist'
		}]),

		/**
		 * Extract all of the stylus out into this CSS file
		 */
		new ExtractTextPlugin(((inProduction) ? '[name].[chunkhash].css' : '[name].css')),

		/**
		 * Inject files into HTML
		 */
		new HtmlWebpackPlugin({
			filename: __dirname + '/dist/index.html',
			template: __dirname + '/src/index.ejs'
		})

	],
	devServer: {
		contentBase: ('./dist'),
		historyApiFallback: true
	},
};

/**
 * NON Producton mode
 */
if (!inProduction) {
	module.exports.devtool = 'source-map'
}

/**
 * Producton mode
 */
if (inProduction) {
	module.exports.plugins.push(
		new UglifyJSPlugin(),
		new OptimizeCssAssetsPlugin()
	)
}
