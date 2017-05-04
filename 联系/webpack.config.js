var webpack = require('webpack');

var path = require('path');
var extractText = require('extract-text-webpack-plugin');
module.exports = {

	entry: {
		bundle: './entry'
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module:{

		rules:[
			{
				test:/\.less$/,//依赖less-loader less
				//use:['style-loader','css-loader','less-loader']
				use:extractText.extract({
					use:['css-loader','less-loader']
				})
			},
            {
                test:/\.sass$/,//依赖sass-loader node-sass
                use:['style-loader','css-loader','less-loader']
            }]
	},

	plugins:[
        new extractText('bundle.css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: false,
            }
        })
	]


};