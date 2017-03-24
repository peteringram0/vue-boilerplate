const path = require('path')

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
				loader: 'vue-loader'
			}
		]

	},
	resolve: {
		alias: {}
	},
	devtool: 'source-map', // Dont make source maps
	devServer: {
		contentBase: ('./dist'),
		historyApiFallback: true
	},
};
