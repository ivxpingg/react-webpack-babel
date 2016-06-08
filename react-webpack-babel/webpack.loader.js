module.exports = [{
		test: /\.js?$/, 
		loaders: ['react-hot', 'babel'],
		exclude: /node_modules/
	},{
		test: /\.js$/,
		loader: 'babel-loader',
		exclude: /node_modules/
	},{
		test: /\.css$/,
		loader: 'style!css'
	}];