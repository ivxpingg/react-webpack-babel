

module.exports = [{
			test: /\.css$/,
		    loader: 'style-loader!css-loader'
		},{
			test: /\.js$/, 
			exclude: /node_modules/, 
			loader: 'babel-loader'
		},{
			test: /\.js$/,
              exclude: /node_modules/,
              loader: "babel-loader",
              query:
                {
                  presets:['react','es2015']
                }
		},{
			test: /\.jsx?$/,
		    exclude: /(node_modules|bower_components)/,
	    	loaders: ['react-hot', 'babel']
		},{
		    test: /\.jpg/,
		    loader: "url-loader?limit=10000&mimetype=image/jpg&name=images/[name].jpg"
	    },{
			test: /\.png/,
			loader: "url-loader?limit=10000&mimetype=image/png&name=images/[name].png"
		},{
			test: /\.scss$/,
			loader: 'style-loader!css-loader!sass-loader'
		}];