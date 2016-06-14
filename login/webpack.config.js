var webpack = require('webpack');
var path = require('path');
var loader = require('./webpack.loader');

module.exports = {
	// entry: [
	// 	//'webpack-dev-server/client?http://0.0.0.0:8080', // WebpackDevServer host and port
	// 	'webpack/hot/only-dev-server',
	// 	'./src/app/test/test.js' // Your appʼs entry point
	// ],

	entry: {
		login: ['webpack/hot/only-dev-server','./src/app/login/index.js'],
		test: ['./src/app/test/test.js']
	},
	//devtool: process.env.WEBPACK_DEVTOOL || 'source-map',
	output: {
		path: path.join(__dirname, 'build/'),
		filename: '[name]/bundle.js'
	},
	resolve: {
		extensions: ['', '.js', '.jsx','.scss']
	},
	module: {
		loaders: loader
	},
	devServer: {
		contentBase: "./build/",
			noInfo: true, //  --no-info option
			hot: true,
			inline: true
		},
	plugins: [
		new webpack.NoErrorsPlugin()
	]
};
