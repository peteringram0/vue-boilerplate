const webpack = require('webpack');
const path = require('path');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

/**
 * Module
 */
module.exports = {
	entry: {
		app: './src/app.js',
		vendor: ['vue', 'vue-router', 'axios']
	},
	output: {
		path: path.join(__dirname, '/public'),
		filename: ((process.env.NODE_ENV) ? '[name].[chunkhash].js' : '[name].js'),
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
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
	plugins: [

		/**
		 * Chunk
		 */
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			minChunks: Infinity,
			filename: ((process.env.NODE_ENV) ? 'vendor-[chunkhash].js' : 'vendor.js'),
		}),

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
		new ExtractTextPlugin(((process.env.NODE_ENV) ? '[name].[chunkhash].css' : '[name].css')),

		/**
		 * Inject files into HTML
		 */
		new HtmlWebpackPlugin({
			filename: __dirname + '/public/index.html',
			template: __dirname + '/src/index.ejs'
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
if (!process.env.NODE_ENV) {

    // Add source maps
	module.exports.devtool = 'source-map'

}

/**
 * Producton mode
 */
if (process.env.NODE_ENV) {
	module.exports.plugins.push(

	    // Uglify
		new UglifyJSPlugin(),

		// Optimize
		new OptimizeCssAssetsPlugin()

	)
}
