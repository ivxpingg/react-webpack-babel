var webpack = require('webpack');
var path = require('path');
module.exports = {
	//页面入口文件配置
	entry: [
        'webpack/hot/only-dev-server',
        './src/app/login/index.js'
	],
    //入口文件输出配置
	output: {
		path: path.join(__dirname, 'build/login'),
		filename: 'bundle.js'
	},
    
	module: {
		//加载器配置
		loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
            { test: /\.css$/, loader: "style!css" },
            {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              query:
                {
                  presets:['react','es2015']
                }
            }
        ]
	},	
    //其它解决方案配置
	resolve: {
        extensions: ['', '.js', '.json']
	},
	devServer: {
        hot: true,
        inline: true
    },
    
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]

};