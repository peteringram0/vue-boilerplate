const webpack = require('webpack');
const path = require('path');

var inProduction = (process.env.NODE_ENV === 'production');

const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'app.js',
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
				options: {
					loaders: {
						// css: ExtractTextPlugin.extract({
						// 	use: 'css-loader',
						// 	fallback: 'vue-style-loader'
						// })
						stylus: ExtractTextPlugin.extract({
							loader: ['css-loader', 'stylus-loader'],
							fallbackLoader: 'vue-style-loader'
						})
					}
				}
			}
		]

	},
	resolve: {
		alias: {}
	},
	plugins: [
		new ExtractTextPlugin("styles.css")
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
		new UglifyJSPlugin()
	)
}
